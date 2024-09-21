import React from 'react'
import './ButtonPrimary.scss'
import { useEffect, useRef} from "react";

export default function ButtonPrimary(props) {
  const verifyIcon = useRef([])
  const shuffleIcon = useRef([])
  const checkmarkIcon = useRef([])
  const button =useRef([])


  useEffect(() => {
    if (props.icon === 'verify'){
      verifyIcon.current.classList.add(`bi-check2-circle--visible`)
      button.current.classList.add(`buttonPrimary__button--dark`)


    } else if (props.icon === 'shuffle') {
      shuffleIcon.current.classList.add('bi-shuffle--visible')
      button.current.classList.add(`buttonPrimary__button--light`)


    } else if (props.icon === 'submit'){
      checkmarkIcon.current.classList.add('bi-check2--visible')
      button.current.classList.add(`buttonPrimary__button--light`)

    } 
  })

  return (
    <div className='buttonPrimary'>
        <button className='buttonPrimary__button' ref={button} onClick={props.function}>{props.text}</button>
        <i className='bi-check2-circle' ref={verifyIcon}>{}</i>
        <i className="bi-shuffle" ref={shuffleIcon}></i>   
        <i className="bi-check2" ref={checkmarkIcon}></i>
    </div>
    
  )
}
