import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <h3 className="footer-logo">Patika Sport Center</h3>
          <p className="footer-desc">
            Your health is our priority. Join us today and start your journey with the best equipment and trainers.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-links">
            <li>123 Sport Street, Erzurum City</li>
            <li>+90 (555) 123 45 67</li>
            <li>info@patikasportcenter.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Patika Sport Center. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer