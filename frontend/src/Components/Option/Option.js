import React from 'react'
import Checkbox from "../Checkbox/Checkbox";
import './Option.scss'

export default function Option(props) {


  return (
    <div className='option'>
      <Checkbox optionValue={props.value} optionCategory={props.category}/>
      <p className='option__text'>{props.value}</p>
    </div>
  )
}
