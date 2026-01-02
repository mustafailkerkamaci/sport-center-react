import React from 'react'

const ClassButtons = ({ activeClass, setActiveClass }) => {
  const buttons = [
    { id: 'yoga', label: 'Yoga' },
    { id: 'group', label: 'Group' },
    { id: 'solo', label: 'Solo' },
    { id: 'stretching', label: 'Stretching' },
  ]

  return (
    <div className="class-buttons-container">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={`class-btn ${activeClass === btn.id ? 'active' : ''}`}
          onClick={() => setActiveClass(btn.id)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}

export default ClassButtons