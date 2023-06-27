import React, {useState, useEffect} from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar () {
 
  
  const [toggleMenu, setToggleMEnu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {

    setToggleMEnu(!toggleMenu)
  
  }


  useEffect (() => {

    const changeWidth = () => {

      setLargeur(window.innerWidth);

      if(window.innerWidth > 500){
        setToggleMEnu(false)
        
      }
    }

    window.addEventListener ('rezise', changeWidth);

  
  },[])

  

  return (
    <header className="Header">
      <img id="Logo" src="logo.png" alt="Logo"/>
      {(toggleMenu || largeur > 500) && (
      <ul className="Nav">
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/'>Boutique</Link></li>
        <li id="Cart"><i className="fa-solid fa-cart-shopping"></i></li>
      </ul>)}
      <button  onClick={toggleNavSmallScreen}  className="Hamburger" type="button" aria-label="Toogle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

