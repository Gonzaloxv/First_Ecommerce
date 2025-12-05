// src/components/ItemCount.jsx
import React from 'react'
import '../styles/ItemCount.css'

export default function ItemCount({ stock=10, initial=1, onAdd }){
  const [qty, setQty] = React.useState(initial)

  function inc(){
    setQty(q => Math.min(q+1, stock))
  }
  function dec(){
    setQty(q => Math.max(q-1, 1))
  }
  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={dec} aria-label="decrease">-</button>
        <span>{qty}</span>
        <button onClick={inc} aria-label="increase">+</button>
      </div>
      <button className="add-btn" onClick={() => onAdd(qty)}>Agregar al carrito</button>
    </div>
  )
}
