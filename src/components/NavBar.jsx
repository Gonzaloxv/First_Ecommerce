// src/components/NavBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import '../styles/NavBar.css'

export default function NavBar(){
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">Perfumería</Link>
        <div className="links">
          <Link to="/category/mujer" className="nav-link">Mujer</Link>
          <Link to="/category/hombre" className="nav-link">Hombre</Link>
          <Link to="/category/sets" className="nav-link">Sets</Link>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}
