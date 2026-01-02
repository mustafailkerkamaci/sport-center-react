import React from 'react'

const ProductCard = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className="product-card">
      <div className="product-img-box">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">
          <span className="old-price">{oldPrice}</span> / <span className="new-price">{newPrice}</span>
        </p>
        <button className="btn-add-cart">
          <span>🛒</span> Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard