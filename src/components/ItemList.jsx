// src/components/ItemList.jsx
import React from 'react'
import Item from './Item'
import '../styles/ItemList.css'

export default function ItemList({ products }){
  if (!products) return <p>Cargando...</p>
  if (products.length === 0) return <p>No hay productos.</p>
  return (
    <div className="item-list">
      {products.map(p => <Item key={p.id} product={p} />)}
    </div>
  )
}
