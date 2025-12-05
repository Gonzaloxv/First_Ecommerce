// src/containers/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductById } from '../firebase/firestore'

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const load = async () => {
      const p = await getProductByIdWithFallback(id)
      setProduct(p)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <p className="loader">Cargando detalle...</p>

  return <ItemDetail product={product} />
}
