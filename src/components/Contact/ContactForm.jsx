import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-left-wrapper">
      <h2 className="section-title" style={{ textAlign: 'left' }}>Contact Us</h2>
      <div className="title-underline" style={{ margin: '10px 0' }}></div>
      <p className="section-desc" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        Have questions? We are here to help. Send us a message below.
      </p>

      <form className="contact-form">
        <div className="input-wrap">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="input-wrap">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="input-wrap">
          <textarea rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
          Send Message
        </button>
      </form>

      <div className="contact-details-bottom">
        <div className="detail-item">
          <h4 className="info-title">Phone Number</h4>
          <p>+90 (555) 123 45 67</p>
        </div>
        <div className="detail-item">
          <h4 className="info-title">Email Address</h4>
          <p>info@patikasportcenter.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm