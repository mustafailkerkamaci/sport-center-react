import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: '5kg Dumbbell',
      oldPrice: '89.99$',
      newPrice: '59.99$',
      image: '/images/dumbell.png',
    },
    {
      id: 2,
      title: 'Speed Jump Rope',
      oldPrice: '40.00$',
      newPrice: '25.00$',
      image: '/images/jrope.png',
    },
    {
      id: 3,
      title: '3kg Kettlebell',
      oldPrice: '60.00$',
      newPrice: '45.00$',
      image: '/images/kettlebell.png',
    },
    {
      id: 4,
      title: 'Patika Protein Powder',
      oldPrice: '120.00$',
      newPrice: '99.00$',
      image: '/images/powder.png',
    },
  ]

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  )
}

export default ProductList