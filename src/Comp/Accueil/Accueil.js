import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Titre from './chocoPap/ChocoPap'
import Footer from './Footer/Footer'

export default function Accueil() {
  return (
    <div>
        <Navbar />
        <Titre />
        <Slider />
        <Footer />
        
    </div>
  )
}
