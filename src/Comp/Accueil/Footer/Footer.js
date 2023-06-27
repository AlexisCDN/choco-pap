import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='MainFooter'>
        <div className='LeftFooter'>
            <h3>Choco Pap</h3>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor 
                incididunt ut labore et dolore 
                magna aliqua
            </p>
        </div>
        <div className='Contact'>
            <h3>Contact</h3>
            <ul>
                <li>Adresse : 51 rue du chocolat 75000 Paris</li>
                <li>Téléphone: 01 23 45 67 89</li>
                <li>Horaires: 9h00-17h00 du Lundi au vendredi</li>
            </ul>
        </div>
        <div className='Reseaux'>
            <ul>
                <li><a href="https://www.facebook.com"><i class="fa-brands fa-square-facebook"></i></a></li>
                <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.twitter.com"><i class="fa-brands fa-square-twitter"></i></a></li>
            </ul>
        </div>
    </div>
  )
}
