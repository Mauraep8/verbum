import React from 'react'
import './Answer.scss'

export default function Answer() {

  const verify = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='answer'>
      <form className='answer__form'>
        <input className='answer__input' type="text" placeholder='Answer'/>
        <button className='answer__button' onClick={verify}>Verify</button>
      </form>
      <button className='answer__button'>Shuffle</button>
    </div>
  )
}
