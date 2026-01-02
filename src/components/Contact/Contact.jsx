import React from 'react'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <ContactForm />
        <ContactMap />
      </div>
    </section>
  )
}

export default Contact