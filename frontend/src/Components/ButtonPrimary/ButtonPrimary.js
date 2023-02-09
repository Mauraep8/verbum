import React from 'react'
import './ButtonPrimary.scss'

export default function ButtonPrimary(props) {
  return (
    <div className='buttonPrimary'>
        <button className='buttonPrimary__button' onClick={props.function}>{props.text}</button>
    </div>
  )
}
