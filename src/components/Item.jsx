// src/components/Item.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

export default function Item({product}){
  return (
    <div className="item-card">
      <Link to={`/item/${product.id}`}>
        <img src={product.image || '/images/products/placeholder.png'} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">${product.price?.toFixed(2) || '0.00'}</p>
      </Link>
    </div>
  )
}
