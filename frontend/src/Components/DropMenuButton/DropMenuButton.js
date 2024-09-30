import React, {forwardRef, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import './DropMenuButton.scss'


const DropMenuButton = forwardRef(function DropMenuButton(props, ref) {
 
  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))
  const editIcon = useRef([])


  useEffect(() => {
    if (props.type === 'verb'){
      console.log('hello')
      editIcon.current.classList.add('bi-pencil-square--visible')
    } else{
      editIcon.current.classList.add('bi-pencil-square--hidden')
      console.log('nay')
    }

  },[])

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
        <button className='dropmenuButton__icon-button' ref={editIcon}><i className="bi-pencil-square" ></i></button>
        <button className={`dropmenuButton__button dropmenuButton__button--${props.type}`} ref={ref} onClick={clickHandler}>
          <label className={'dropmenuButton__button-label'}>{props.result}</label>
        </button>
        <i className="bi-caret-down-fill"></i>
  </div>
  )
})

export default DropMenuButton;
