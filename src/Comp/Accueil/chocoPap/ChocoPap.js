import React from 'react'
import './ChocoPap.css'
import { Link } from "react-router-dom"

export default function 
() {
  return (
    <div className='Title'>
        <h1>Choco pap</h1>
        <button class="btn" type="button">
        <Link to='Boutique'>Voir la boutique</Link>
        </button>
    </div>
  )
}
