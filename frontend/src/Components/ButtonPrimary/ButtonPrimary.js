import React from 'react'
import './ButtonPrimary.scss'
import { useEffect, useRef} from "react";

export default function ButtonPrimary(props) {
  console.log(props.icon)

  const verifyIcon = useRef([])
  const shuffleIcon = useRef([])
  const checkmarkIcon = useRef([])


  // useEffect(() => {
  //   if (props.icon === 'verify'){
  //     console.log('hey')
  //     verifyIcon.current.classList.add(`bi-check2-circle--visible`)
  //     shuffleIcon.current.classList.remove('bi-shuffle--visible')
  //     checkmarkIcon.current.classList.remove('bi-check--visible')

  //   } else if (props.icon === 'shuffle') {
  //     console.log('no')
  //     shuffleIcon.current.classList.add('bi-shuffle--visible')
  //     verifyIcon.current.classList.remove(`bi-check2-circle--visible`)
  //     checkmarkIcon.current.classList.remove('bi-check--visible')

  //   } else if (props.icon === 'submit'){
  //     console.log('blabla')
  //     checkmarkIcon.current.classList.add('bi-checkmark--visible')
  //     verifyIcon.current.classList.remove(`bi-check2-circle--visible`)
  //     shuffleIcon.current.classList.remove('bi-shuffle--visible')
  //   } 
  // })

  return (
    <div className='buttonPrimary'>
        <button className='buttonPrimary__button' onClick={props.function}>{props.text}</button>
        <i className='bi bi-check2-circle'ref={verifyIcon}></i>
        <i className="bi bi-shuffle" ref={shuffleIcon}></i>   
        <i className="bi bi-check" ref={checkmarkIcon}></i>
    </div>
    
  )
}
