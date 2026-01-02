import React from 'react'

const FeatureItem = ({ title, text }) => {
  return (
    <div className="service-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  )
}

export default FeatureItem