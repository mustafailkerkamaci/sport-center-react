import React, { useState } from 'react'

const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  // --- HESAPLAMA MANTIĞI  ---
  let bmi = null
  let markerPosition = 0 // Ok varsayılan olarak en solda (0)

  if (height && weight) {
    const heightInMeters = height / 100
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1)
    
    bmi = bmiValue
    
    // Ok pozisyonu hesabı (Matematik aynı)
    let position = ((bmiValue - 10) / 35) * 100 
    
    // Sınırları aşmasın
    if (position < 0) position = 0
    if (position > 100) position = 100
    
    markerPosition = position
  }
  // --------------------------------------------------------------------------

  return (
    <div className="bmi-content">
      <h2 className="section-title">BMI Calculator</h2>
      <p className="section-desc">
        Understanding your Body Mass Index (BMI) is the first step to a healthy life.
        Enter your details below to see where you stand.
      </p>

      <div className="bmi-form">
        <div className="input-group">
          <input 
            type="number" 
            placeholder="Your Height (cm)" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label>cm</label>
        </div>
        <div className="input-group">
          <input 
            type="number" 
            placeholder="Your Weight (kg)" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>kg</label>
        </div>
      </div>

      <div className="bmi-result-area">
        Your BMI: <span id="bmi-value">{bmi || '--.-'}</span>
      </div>

      <div className="bmi-chart-container">
        <div className="bmi-bar"></div>
        
        <div 
          className="bmi-marker" 
          style={{ left: `${markerPosition}%` }} 
        ></div>
        
        <div className="bmi-labels">
          <span>Underweight</span>
          <span>Normal</span>
          <span>Overweight</span>
          <span>Obese</span>
        </div>
      </div>
    </div>
  )
}

export default BMICalculator