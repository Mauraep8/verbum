import React from 'react'
import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenu() {
  return (
    <div className='dropmenu'>
      <h3>verb</h3>
      <button>aimer</button>
      <Option/>
      <Option/>
      <Option/>
    </div>
  )
}
