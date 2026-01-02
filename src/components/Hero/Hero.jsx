import React from 'react'
import HeroContent from './HeroContent'
import HeroButtons from './HeroButtons'
import './Hero.css'

const Hero = () => {
  return (
   
    <section id="home" className="hero-section">
      <div className="hero-content">
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  )
}

export default Hero