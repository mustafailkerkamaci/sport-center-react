import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewList = () => {
  const reviews = [
    {
      id: 1,
      text: "The trainers here are amazing! I lost 10kg in just 3 months. The atmosphere is so relaxing.",
      name: "Ah** Yı**",
      type: "Member since 2023"
    },
    {
      id: 2,
      text: "I love the Yoga classes. The instructors are very professional. The facility is always clean.",
      name: "El** Ka**",
      type: "Yoga Student"
    },
    {
      id: 3,
      text: "Best gym in the city! The personalized program really works. I highly recommend the 'Solo' training.",
      name: "Me** De**",
      type: "Bodybuilder"
    }
  ]

  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          text={review.text}
          name={review.name}
          type={review.type}
        />
      ))}
    </div>
  )
}

export default ReviewList