'use server'

import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { convertToPlainObject, formatError } from '../utils'
import { auth } from '@/auth'
import { getMyCart } from './cart.actions'
import { getUserById } from './user.actions'
import { insertOrderSchema } from '../validators'
import { prisma } from '@/db/prisma'
import { CartItem } from '@/types'

export async function createOrder() {
  try {
    const session = await auth()
    if (!session) throw new Error('User is not authenticated')

    const cart = await getMyCart()
    const userId = session?.user?.id
    if (!userId) throw new Error('User not found')

    const user = await getUserById(userId)

    if (!cart || cart.items.length === 0) {
      return {
        success: false,
        message: 'Your cart is empty',
        redirectTo: '/cart',
      }
    }

    if (!user.address) {
      return {
        success: false,
        message: 'No shipping address',
        redirectTo: '/shipping-address',
      }
    }

    if (!user.paymentMethod) {
      return {
        success: false,
        message: 'No payment method',
        redirectTo: '/payment-method',
      }
    }

    const order = insertOrderSchema.parse({
      userId: user.id,
      shippingAddress: user.address,
      paymentMethod: user.paymentMethod,
      itemsPrice: cart.itemsPrice,
      taxPrice: cart.taxPrice,
      shippingPrice: cart.shippingPrice,
      totalPrice: cart.totalPrice,
    })

    // Create an transaction to create order and order items in database
    const insertedOrderId = await prisma.$transaction(async (tx) => {
      const insertedOrder = await tx.order.create({ data: order })
      for (const item of cart.items as CartItem[]) {
        await tx.orderItem.create({
          data: { ...item, price: item.price, orderId: insertedOrder.id },
        })
      }
      // Clear the cart in DB
      await tx.cart.update({
        where: { id: cart.id },
        data: {
          items: [],
          totalPrice: 0,
          itemsPrice: 0,
          taxPrice: 0,
          shippingPrice: 0,
        },
      })
      return insertedOrder.id
    })
    if (!insertedOrderId) throw new Error('Order not created')

    return {
      success: true,
      message: 'Order created',
      redirectTo: `/order/${insertedOrderId}`,
    }
  } catch (error) {
    if (isRedirectError(error)) throw error
    return {
      success: false,
      message: formatError(error),
    }
  }
}

// Get order by id
export async function getOrderById(orderId: string) {
  const data = await prisma.order.findFirst({
    where: {
      id: orderId,
    },
    include: {
      orderitems: true,
      user: { select: { name: true, email: true } },
    },
  })

  return convertToPlainObject(data)
}
