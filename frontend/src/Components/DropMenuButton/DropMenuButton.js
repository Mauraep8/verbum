import React, {forwardRef, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import './DropMenuButton.scss'


const DropMenuButton = forwardRef(function DropMenuButton(props, ref) {
 
  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))
  const messageState = useSelector(((state) => state.exercise.messageState))
  const messageWarning = useSelector((state) => state.exercise.userSelectionMessage.missingType);
  
  const iconRef = useRef()

  

useEffect(() => {
  if (props.type === messageState){
    iconRef.current.classList.add('bi-exclamation-circle-fill--active')
    ref.current.classList.add('dropmenuButton__button--error')
  } else if (props.type === messageWarning) {
    iconRef.current.classList.add('bi-exclamation-circle-fill--active')
    ref.current.classList.add('dropmenuButton__button--error')
  } else{
    iconRef.current.classList.remove('bi-exclamation-circle-fill--active')
    ref.current.classList.remove('dropmenuButton__button--error')
  }
},[messageState, messageWarning])

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
    <div className='dropmenuButton' >
        <label className='dropmenuButton__label'>{props.type}</label>
        <button className={`dropmenuButton__button dropmenuButton__button--${props.type}`} ref={ref} onClick={clickHandler}>
          <i className="bi bi-exclamation-circle-fill" ref={iconRef}></i>
          <label className={'dropmenuButton__button-label'}>{props.result}</label>
        </button>
        <i className="bi-caret-down-fill"></i>
  </div>
  )
})

export default DropMenuButton;
