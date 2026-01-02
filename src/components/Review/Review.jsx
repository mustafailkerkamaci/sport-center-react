import React from 'react'
import ReviewList from './ReviewList'
import './Review.css'

const Review = () => {
  return (
    <section id="review" className="review-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Client Reviews</h2>
          <div className="title-underline"></div>
          <p className="section-desc">
            We don't just build bodies, we build trust. See what our members say about us.
          </p>
        </div>

        <ReviewList />

      </div>
    </section>
  )
}

export default Review