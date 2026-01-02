import React from 'react'
import FeatureItem from './FeatureItem'

const FeatureList = () => {
  // Kart verileri (Senin HTML'inden aldım)
  const featuresData = [
    {
      title: "Fitness & Cardio",
      text: "Spacious work areas equipped with state-of-the-art equipment."
    },
    {
      title: "Group Classes",
      text: "Keep your motivation high with Yoga, Pilates and Spinning."
    },
    {
      title: "Personal Training",
      text: "Programs specially prepared for you by our expert coaches."
    }
  ]

  return (
    <>
      {featuresData.map((feature, index) => (
        <FeatureItem key={index} title={feature.title} text={feature.text} />
      ))}
    </>
  )
}

export default FeatureList