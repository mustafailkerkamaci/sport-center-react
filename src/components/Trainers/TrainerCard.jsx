import React from 'react'

const TrainerCard = ({ image, name, role }) => {
  return (
    <div className="trainer-card">
      <div className="trainer-img-wrapper">
        <img src={image} alt={name} className="trainer-img" />
        {/* Hover olunca çıkan mavi perde */}
        <div className="trainer-overlay"></div>
      </div>
      <div className="trainer-info">
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-role">{role}</p>
      </div>
    </div>
  )
}

export default TrainerCard