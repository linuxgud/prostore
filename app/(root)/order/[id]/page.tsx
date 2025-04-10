import { Metadata } from 'next'
import { getOrderById } from '@/lib/actions/order.actions'
import { notFound } from 'next/navigation'
//import { ShippingAddress } from '@/types'

export const metadata: Metadata = {
  title: 'Order Details',
}

const OrderDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params
  const order = await getOrderById(id)
  if (!order) return notFound()

  return <div>OrderDetailsPage {order.totalPrice.toString()}</div>
}
export default OrderDetailsPage
