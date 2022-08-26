import React from 'react'
import './Navbar.scss'

export default function Navbar() {                                 
  return (
    <div className='navbar'>
        <h1 className='navbar__header'>VERBUM</h1>    
        <nav className='navbar__nav'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>ABOUT</li>
                <li className='navbar__list-item'>FRENCH</li>
                <li className='navbar__list-item'>CONTACT US</li>
            </ul>
        </nav>
    </div>
  )
}
