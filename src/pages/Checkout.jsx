// src/pages/Checkout.jsx
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase/firestore'
import '../styles/Checkout.css'

export default function Checkout(){
  const { cart, getTotalPrice, clearCart } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    if (cart.length === 0) return
    setLoading(true)
    const order = {
      buyer: { name, email, phone },
      items: cart,
      total: getTotalPrice(),
      createdAt: new Date().toISOString()
    }
    try {
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    } catch (e) {
      console.error(e)
      alert('Error al generar la orden.')
    } finally {
      setLoading(false)
    }
  }

  if (orderId) return <div className="checkout-success"><h2>Gracias por tu compra</h2><p>ID de la orden: <strong>{orderId}</strong></p></div>

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Nombre completo<input value={name} onChange={e=>setName(e.target.value)} required/></label>
        <label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Teléfono<input value={phone} onChange={e=>setPhone(e.target.value)} required/></label>
        <div className="checkout-total">Total: ${getTotalPrice().toFixed(2)}</div>
        <button className="btn" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
      </form>
    </div>
  )
}
