import React, {useRef, useEffect} from 'react'
import DropMenu from '../DropMenu/DropMenu'
import './Grammar.scss'
import {useSelector} from 'react-redux'




export default function Grammar(props) {

  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))


  const dropmenuWrapper = useRef ([])
  const dropmenuButton = useRef ([])

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
  const onFocusDropmenu = () =>{
    dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--hidden')
    dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--active')
  }

  const onBlurDropmenu = () =>{
    dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--active')
    dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--hidden')
  }


  if(props.shuffleState.result === null){
    return (
      <div className='grammar'>
        <div className='grammar__container' tabIndex={0}  onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}>
          <div className='grammar__button-container'>
            <label className='grammar__button-label'  htmlFor="">{props.type}</label>
            <button className={`grammar__button grammar__button--${props.type}`} ref={dropmenuButton}>{'-none-'}</button>
          </div>
          <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenu value={props.option} verb={null} type={props.type}/>
          </div>
        </div>
      </div>
    )
  } else if (props.shuffleState === undefined || props.shuffleState.length === 0 ) {
    return (
      <div className='grammar'>
        <div className='grammar__container' tabIndex={0} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}>
          <div className='grammar__button-container'>
            <label className='grammar__button-label' htmlFor="">{props.type}</label>
            <button className={`grammar__button grammar__button--${props.type}`}>{props.option[0].option}</button>
            <i class="bi-caret-down-fill"></i>
          </div>
          <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenu value={props.option} verb={null} type={props.type}/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='grammar'>
        <div className='grammar__container'  tabIndex={0} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}>
          <div className='grammar__button-container'>
            <label className='grammar__button-label' htmlFor="">{props.type}</label>
            <button className={`grammar__button grammar__button--${props.type}`} ref={dropmenuButton}>{props.shuffleState.result.value}</button>
            <i className="bi-caret-down-fill"></i>
          </div>
          <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenu value={props.option} verb={null} type={props.type}/>
          </div>
        </div>
      </div>
    )
  }
}
