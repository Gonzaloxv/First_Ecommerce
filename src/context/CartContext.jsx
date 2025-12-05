// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function useCart(){
  return useContext(CartContext)
}

export function CartProvider({ children }){
  const [cart, setCart] = useState([])

  function addItem(item, qty){
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id)
      if (exists){
        return prev.map(p => p.id === item.id ? { ...p, qty: Math.min(p.qty + qty, item.stock || 999) } : p)
      }
      return [...prev, { ...item, qty }]
    })
  }

  function removeItem(id){
    setCart(prev => prev.filter(p => p.id !== id))
  }

  function clearCart(){
    setCart([])
  }

  function getTotalItems(){
    return cart.reduce((s, p) => s + p.qty, 0)
  }

  function getTotalPrice(){
    return cart.reduce((s, p) => s + (p.price || 0) * p.qty, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
