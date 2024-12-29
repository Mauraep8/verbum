import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Navbar() {                                 
  return (
    <div className='navbar'>
        <div className='navbar__header-container'>
          <Link className='navbar__link' to='/'><h1 className='navbar__header'>VERBUM</h1></Link>
        </div>
        <nav className='navbar__nav'>
            <ul className='navbar__list'>
                {/* <Link className='navbar__link' to='/about'><li className='navbar__list-item'>ABOUT</li></Link> */}
                {/* <Link className='navbar__link' to='/french'><li className='navbar__list-item'>FRENCH CONJUGATION EXERCISE</li></Link> */}
                {/* <Link className='navbar__link' to='/contact'><li className='navbar__list-item'>CONTACT</li></Link> */}
            </ul>
        </nav>
    </div>
  )
}
