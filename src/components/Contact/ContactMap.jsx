import React from 'react'

const ContactMap = () => {
  return (
    <div className="map-wrapper">
      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=Erzurum&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default ContactMap