import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.scss'

export default function ContactPage() {
  return (
    <div className='contact'>
      <Navbar/>
      <div className='contact__background'>
        <div className='contact__container'>
              <h2 className='contact__header'>Contact</h2>
              <div className='contact__form-container'>
                  <form action="">
                    <div className='contact__input-container'>
                      <label htmlFor="">Subject</label>
                      <input type="text" />
                    </div>
                    <div className='contact__input-container'>
                      <label htmlFor="">Message</label>
                      <textarea type="text" />
                    </div>
                      <button className='contact__button'>Submit</button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  )
}