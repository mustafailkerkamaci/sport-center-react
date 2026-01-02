import React from 'react'
import BMICalculator from './BMICalculator'
import BMIImage from './BMIImage'
import './BMI.css'

const BMI = () => {
  return (
    <section className="bmi-section">
      <div className="container bmi-container">
        {/* Sol Taraf: Hesap Makinesi */}
        <BMICalculator />
        
        {/* Sağ Taraf: Resim */}
        <BMIImage />
      </div>
    </section>
  )
}

export default BMI