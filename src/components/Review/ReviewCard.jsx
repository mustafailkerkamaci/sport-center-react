import React from 'react'

const ReviewCard = ({ text, name, type }) => {
  return (
    <div className="review-card">
      <div className="review-bubble">
        <p>"{text}"</p>
        {/* Balonun altındaki küçük ok CSS ile yapılıyor */}
      </div>
      <div className="client-info">
        <h4 className="client-name">{name}</h4>
        <span className="client-type">{type}</span>
      </div>
    </div>
  )
}

export default ReviewCard