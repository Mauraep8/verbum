import React from 'react'
import './Option.scss'

export default function Option(props) {
  return (
    <div className='option'>
      <p className='option__text'>{props.verbName}</p>
    </div>
  )
}
