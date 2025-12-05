// src/components/ItemDetail.jsx
import React from 'react'
import ItemCount from './ItemCount'
import '../styles/ItemDetail.css'
import { useCart } from '../context/CartContext'

export default function ItemDetail({ product }){
  const { addItem } = useCart()
  const [added, setAdded] = React.useState(false)

  function handleAdd(qty){
    addItem(product, qty)
    setAdded(true)
  }

  if (!product) return <p>Producto no encontrado</p>

  return (
    <div className="item-detail">
      <img src={product.image || '/src/assets/placeholder.png'} alt={product.title} />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price?.toFixed(2)}</p>
        <p className="desc">{product.description}</p>
        { product.stock === 0 ? (
          <p className="out">Producto sin stock</p>
        ) : (
          !added ? <ItemCount stock={product.stock || 10} initial={1} onAdd={handleAdd} /> :
          <div className="after-add">
            <p>Producto agregado al carrito</p>
            <a href="/cart" className="btn">Ir al carrito</a>
          </div>
        )}
      </div>
    </div>
  )
}
