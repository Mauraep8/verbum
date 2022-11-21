import React, {useRef, useEffect} from 'react'
import DropMenu from '../DropMenu/DropMenu'
import './Grammar.scss'
import {useSelector} from 'react-redux'




export default function Grammar(props) {

  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))


  const dropmenuWrapper = useRef ([])
  const dropmenuButton = useRef ([])

  // console.log(props.shuffleState)

  // WHEN SHUFFLE IS CLICKED BUTTONS TURN BLUE MOMENTARILY
  useEffect(() => {

    if (shuffleAction === true){
      if (props.shuffleState.colorChange === true){
        dropmenuButton.current.classList.remove('grammar__button--inactive')
        dropmenuButton.current.classList.add('grammar__button--active')

        setTimeout(() => {
          dropmenuButton.current.classList.add('grammar__button--inactive')
          dropmenuButton.current.classList.remove('grammar__button--active')

        }, 400);     
      }
    }   
  })
  
  // WHEN BUTTON IS CLICKED, DROPMENU OPENS AND CLOSES
  const handlerDropmenu = () =>{
    if (dropmenuWrapper.current.classList.value === 'grammar__dropmenu-wrapper--hidden'){
      dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--hidden')
      dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--active')
    } else {
      dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--active')
      dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--hidden')

    }
  }

  if(props.shuffleState.result === null){
    return (
      <div className='grammar'>
        <button className='grammar__button' ref={dropmenuButton} onFocus={handlerDropmenu}>{'-none-'}</button>
        <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
          <DropMenu value={props.option}/>
        </div>
      </div>
    )
  } else if (props.shuffleState === undefined || props.shuffleState.length === 0 ) {
    return (
      <div className='grammar'>
        <button className='grammar__button' onFocus={handlerDropmenu}>{props.option[0].option}</button>
        <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
          <DropMenu value={props.option}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='grammar'>
        <button className='grammar__button' ref={dropmenuButton} onClick={handlerDropmenu}>{props.shuffleState.result.value}</button>
        <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
          <DropMenu value={props.option}/>
        </div>
      </div>
    )
  }
}
