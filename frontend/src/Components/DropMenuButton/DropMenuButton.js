import React, {forwardRef, useRef} from 'react'
import {useSelector} from 'react-redux'
import './DropMenuButton.scss'


const DropMenuButton = forwardRef(function DropMenuButton(props, ref) {
 
  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))

  const clickHandler = () =>{
    props.function()
  }

  // WHEN SHUFFLE IS CLICKED BUTTONS TURN BLUE MOMENTARILY
  if (shuffleAction === true){
    if (props.colorChange === true){
        ref.current.classList.remove('dropmenuButton__button--inactive')
        ref.current.classList.add('dropmenuButton__button--active')
                
        setTimeout(() => {
          ref.current.classList.add('dropmenuButton__button--inactive')
          ref.current.classList.remove('dropmenuButton__button--active')               
        }, 400);     
    }
  }   

  return (
    <div className='dropmenuButton'>
        <label className='dropmenuButton__label'>{props.type}</label>
        <button className={`dropmenuButton__button dropmenuButton__button--${props.type}`} ref={ref} onClick={clickHandler}>{props.result}</button>
        <i className="bi-caret-down-fill"></i>
  </div>
  )
})

export default DropMenuButton;
