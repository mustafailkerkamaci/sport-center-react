import React from 'react'
import ProductList from './ProductList'
import './Purchase.css'

const Purchase = () => {
  return (
    <section className="purchase-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Purchase From Us</h2>
          <div className="title-underline"></div>
          <p className="section-desc">
            Get the best equipment for your home workout. High quality products selected by our experts.
          </p>
        </div>

        <ProductList />

      </div>
    </section>
  )
}

export default Purchase