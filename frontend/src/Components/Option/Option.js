import React from 'react'
import './Option.scss'

export default function Option(props) {


  return (
    <div className='option'>
      <input type="checkbox" />
      <p className='option__text'>{props.value}</p>
    </div>
  )
}
