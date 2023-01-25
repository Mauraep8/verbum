import React, {useRef, useEffect, useState} from 'react'

// import DropMenuVerb from '../DropMenu/DropMenuVerb';
import Dropmenu from "../DropMenu/DropMenu";
import './Verb.scss'
import { useDispatch, useSelector } from 'react-redux';
import { verbListUpdateAction } from '../../Store/exerciseSlice';

export default function Verb(props) {

  const [dropMenuText, setDropMenuText] = useState ([])

  const verbListApprovedUpdate = useSelector((state)=> state.exercise.verbListApprovedUpdate) 
  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction)) 

  const dropmenuWrapper = useRef ([])
  const dropmenuButton = useRef ([])

  const dispatch = useDispatch()

     // WHEN BUTTON IS CLICKED, DROPMENU OPENS AND CLOSES
    const onFocusDropmenu = () =>{
      dropmenuWrapper.current.classList.remove('verb__dropmenu-wrapper--hidden')
      dropmenuWrapper.current.classList.add('verb__dropmenu-wrapper--active')
    }

    const onBlurDropmenu = () =>{
      dropmenuWrapper.current.classList.remove('verb__dropmenu-wrapper--active')
      dropmenuWrapper.current.classList.add('verb__dropmenu-wrapper--hidden')
    }
   
 
    useEffect(() => {

       // WHEN VERBLIST IS UPDATED BUTTONS TURN GREEN MOMENTARILY AND DROPMENU TEXT UPDATED
      if (verbListApprovedUpdate === true){
          dropmenuButton.current.classList.remove('verb__button--inactive')
          dropmenuButton.current.classList.add('verb__button--active-updated')
  
          setTimeout(() => {
            dropmenuButton.current.classList.add('verb__button--inactive')
            dropmenuButton.current.classList.remove('verb__button--active-updated')
  
          }, 400);     
        dispatch(verbListUpdateAction(false))
        setDropMenuText(props.option[0].verbName)
      }
 
      // WHEN SHUFFLE IS CLICKED BUTTONS TURN BLUE MOMENTARILY DROPMENU TEXT UPDATED
      if (shuffleAction === true && (verbListApprovedUpdate === false || verbListApprovedUpdate.length === 0)){
        if (props.shuffleState.colorChange === true){
          dropmenuButton.current.classList.remove('verb__button--inactive')
          dropmenuButton.current.classList.add('verb__button--active-shuffled')
  
          setTimeout(() => {
            dropmenuButton.current.classList.add('verb__button--inactive')
            dropmenuButton.current.classList.remove('verb__button--active-shuffled')
  
          }, 400);     
        }
        setDropMenuText(props.shuffleState.result.value)
      }   
    },[props.option, props.shuffleState]) 

  //PROPS IS AN EMPTY ARRAY UPON MOUNT BEFORE INITIAL RENDER
  if (dropMenuText.length === 0 && props.option.length !== 0 ){
    return (
      <div className='verb'>
        <div className='verb__container' tabIndex={0} onFocus={onFocusDropmenu} onBlur={onBlurDropmenu}>
          <button className='verb__button' ref={dropmenuButton}>{props.option[0].verbName}</button>
          <div className='verb__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <Dropmenu verbList={props.option} value={null} type={props.type}/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='verb'>
         <div className='verb__container' tabIndex={0} onFocus={onFocusDropmenu} onBlur={onBlurDropmenu}>
          <button className='verb__button' ref={dropmenuButton}>{dropMenuText}</button>
          <div className='verb__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
          <Dropmenu verbList={props.option} value={null} type={props.type}/>
          </div>
         </div>
      </div>
    )
  }
}
