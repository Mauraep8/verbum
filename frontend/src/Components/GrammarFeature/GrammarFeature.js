import React, {useRef, useEffect, useState} from 'react'
import {useSelector } from 'react-redux';
import DropMenu from '../DropMenu/DropMenu'
import './GrammarFeature.scss'
import DropMenuButton from '../DropMenuButton/DropMenuButton'




export default function GrammarFeature(props) {
    
  const [buttonText, setButtonText] = useState([])

  const verbListApprovedUpdate = useSelector((state)=> state.exercise.verbListApprovedUpdate) 


  useEffect(() => {

    // initial render, shuffle has not occurred or verbList has been updated
    if((props.shuffleState === undefined || props.shuffleState.length === 0) || verbListApprovedUpdate === true ){
      setButtonText(props.option[0].verbName)    

      // shuffle has occurred
    } else {
      setButtonText(props.shuffleState.result.value)
    }

  }, [props.option, props.shuffleState])

  const dropmenuWrapper = useRef ([])
 
  // WHEN BUTTON IS CLICKED, DROPMENU OPENS AND CLOSES
  const onFocusDropmenu = () =>{
    dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--hidden')
    dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--active')
  }

  const onBlurDropmenu = () =>{
    dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--active')
    dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--hidden')
  }


if (props.shuffleState === undefined || props.shuffleState.length === 0 ) {
    return (
      <div className='GrammarFeature'>
        <div className='grammarFeature__container' tabIndex={0} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}>
          <DropMenuButton type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange}/>
          <div className='grammarFeature__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenu list={props.option} type={props.type}/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='GrammarFeature'>
        <div className='grammarFeature__container'  tabIndex={0} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}>
          <DropMenuButton type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange}/>
          <div className='grammarFeature__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenu list={props.option} type={props.type}/>
          </div>
        </div>
      </div>
    )
  }
}
