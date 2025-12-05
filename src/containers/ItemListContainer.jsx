// src/containers/ItemListContainer.jsx
import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'

// IMPORTACIÓN CORRECTA
import { 
  getProductsWithFallback, 
  getProductsByCategoryWithFallback 
} from '../firebase/firestore'

export default function ItemListContainer() {
  const { catId } = useParams()
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const load = async () => {
      try {
        const data = catId
          ? await getProductsByCategoryWithFallback(catId)
          : await getProductsWithFallback()

        setProducts(data)
      } catch (e) {
        console.error(e)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [catId])

  if (loading) return <p className="loader">Cargando productos...</p>

  return <ItemList products={products} />
}
