import React from 'react'
import TrainerList from './TrainerList'
import './Trainers.css'

const Trainers = () => {
  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Our Best Trainers</h2>
          <div className="title-underline"></div>
          <p className="section-desc">
            Meet the experts who will guide you on your journey. 
            Specialized professionals for every class type.
          </p>
        </div>

        <TrainerList />
        
      </div>
    </section>
  )
}

export default Trainers