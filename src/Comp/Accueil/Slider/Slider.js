import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"


export default function Slider() {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} transitionTime={1000} interval={5000} stopOnHover={false} showArrows={false} dynamicHeight={true}>
        <div><img src='/assets/accueil1.jpg' alt=''/></div>
        <div><img src='/assets/accueil2.jpg' alt=''/></div>
        <div><img src='/assets/accueil3.jpg' alt=''/></div>
    </Carousel>
  )
}


