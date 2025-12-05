// src/components/CartItem.jsx
import React from 'react'
import { useCart } from '../context/CartContext'
import '../styles/CartItem.css'

export default function CartItem({ item }){
  const { removeItem } = useCart()
  return (
    <div className="cart-item">
      <img src={item.image || '/src/assets/placeholder.png'} alt={item.title} />
      <div className="ci-info">
        <h4>{item.title}</h4>
        <p>Cantidad: {item.qty}</p>
        <p>Subtotal: ${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <button className="remove" onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  )
}
