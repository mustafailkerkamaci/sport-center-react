import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import './Header.css' // CSS dosyasını birazdan oluşturacağız, şimdilik dursun

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Sayfa aşağı kaydırılınca menünün rengini değiştiren kod
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          {/* Logo Parçası */}
          <Logo />
          
          {/* Mobil Hamburger Menü */}
          <div className="hamburger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Linkler Parçası */}
          <NavLinks />
        </nav>
      </div>
    </header>
  )
}

export default Header