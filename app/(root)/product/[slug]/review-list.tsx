'use client'
import { Review } from '@/types'
import { Divide } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string
  productId: string
  productSlug: string
}) => {
  const [reviews, setReviews] = useState<Review[]>([])

  return (
    <div className="space-y-4">
      {reviews.length === 0 && <div>No reviews yet</div>}
      {userId ? (
        <>{/* ReviewForm */}</>
      ) : (
        <div>
          Please
          <Link
            className="text-blue-700 px-2"
            href={`/sign-in?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to review this product
        </div>
      )}
      <div className="flex flex-col gap-3">{/* Reviews */}</div>
    </div>
  )
}

export default ReviewList
