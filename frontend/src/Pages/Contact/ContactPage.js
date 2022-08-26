import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.scss'

export default function ContactPage() {
  return (
    <div className='contact'>
      <Navbar/>
      <div className='contact__container'>
            <h2 className='contact__header'>Contact</h2>
            <div className='contact__form-container'>
                <form action="">
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                    <label htmlFor="">Message</label>
                    <textarea type="text" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}