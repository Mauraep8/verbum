import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import './DropMenuButton.scss'


export default function DropMenuButton(props) {
 
  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))
  const dropmenuButton = useRef ([])

  // WHEN SHUFFLE IS CLICKED BUTTONS TURN BLUE MOMENTARILY
  if (shuffleAction === true){
    if (props.colorChange === true){
        dropmenuButton.current.classList.remove('dropmenuButton__button--inactive')
        dropmenuButton.current.classList.add('dropmenuButton__button--active')
                
        setTimeout(() => {
          dropmenuButton.current.classList.add('dropmenuButton__button--inactive')
          dropmenuButton.current.classList.remove('dropmenuButton__button--active')               
        }, 400);     
    }
  }   

  return (
    <div className='dropmenuButton'>
        <label className='dropmenuButton__label' htmlFor="">{props.type}</label>
        <button className={`dropmenuButton__button dropmenuButton__button--${props.type}`} ref={dropmenuButton}>{props.result}</button>
        <i className="bi-caret-down-fill"></i>
  </div>
  )
}
