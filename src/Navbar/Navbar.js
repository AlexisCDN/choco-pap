import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar () {
  return (
    <header className="Header">
      <img id="Logo" src="logo.png" alt="Logo"/>
      <ul className="Nav">
        <li><Link to='/'>Acceuil</Link></li>
        <li><Link to='Boutique'>Boutique</Link></li>
        <li id="Cart"><i className="fa-solid fa-cart-shopping"></i></li>
      </ul>
    </header>
  )
}

