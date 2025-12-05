import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import CartPage from './pages/Cart'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'

export default function App(){
  return (
    <CartProvider>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </CartProvider>
  )
}
