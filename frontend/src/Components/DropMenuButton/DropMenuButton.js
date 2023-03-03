import React, {useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import '../Grammar/Grammar.scss'


export default function DropMenuButton(props) {

  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))
  const dropmenuButton = useRef ([])

  // WHEN SHUFFLE IS CLICKED BUTTONS TURN BLUE MOMENTARILY
  useEffect(() => {

    if (shuffleAction === true){
      if (props.colorChange === true){
        dropmenuButton.current.classList.remove('grammar__button--inactive')
        dropmenuButton.current.classList.add('grammar__button--active')

        setTimeout(() => {
          dropmenuButton.current.classList.add('grammar__button--inactive')
          dropmenuButton.current.classList.remove('grammar__button--active')

        }, 400);     
      }
    }   
  })
  return (
    <div className='grammar__button-container'>
        <label className='grammar__button-label' htmlFor="">{props.type}</label>
        <button className={`grammar__button grammar__button--${props.type}`} ref={dropmenuButton}>{props.result}</button>
        <i class="bi-caret-down-fill"></i>
  </div>
  )
}
