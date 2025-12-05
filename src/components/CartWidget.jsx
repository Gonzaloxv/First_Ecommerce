// src/components/CartWidget.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/CartWidget.css'

export default function CartWidget(){
  const { getTotalItems } = useCart()
  const total = getTotalItems()
  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h9v-2h-9l1.1-2h6.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49-1.74-1z"/></svg>
        { total > 0 && <span className="badge">{total}</span> }
      </Link>
    </div>
  )
}
