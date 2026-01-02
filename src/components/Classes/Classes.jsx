import React, { useState } from 'react'
import ClassButtons from './ClassButtons'
import ClassContent from './ClassContent'
import './Classes.css'

const Classes = () => {
  
  const [activeClass, setActiveClass] = useState('yoga')

  return (
    <section id="classes" className="classes-section">
      <div className="container">
        
        {/* Başlık Alanı */}
        <div className="section-header">
          <h2 className="section-title">Our Classes</h2>
          <div className="title-underline"></div>
          <p className="section-desc">
            Discover the perfect class for your goals. Choose a program below to see details.
          </p>
        </div>

        {/* 1. Parça: Butonlar */}
        <ClassButtons activeClass={activeClass} setActiveClass={setActiveClass} />

        {/* 2. Parça: İçerik */}
        <div className="class-content-wrapper">
          <ClassContent activeClass={activeClass} />
        </div>

      </div>
    </section>
  )
}

export default Classes