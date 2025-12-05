// src/pages/Cart.jsx
import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import '../styles/Cart.css'

export default function CartPage(){
  const { cart, clearCart, getTotalPrice } = useCart()

  if (cart.length === 0) return <div className="cart-page"><h2>Carrito vacío</h2><Link to="/">Volver al catálogo</Link></div>

  return (
    <div className="cart-page">
      <h2>Tu carrito</h2>
      <div className="cart-list">
        {cart.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <div className="cart-actions">
          <button className="btn" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn">Checkout</Link>
        </div>
      </div>
    </div>
  )
}
