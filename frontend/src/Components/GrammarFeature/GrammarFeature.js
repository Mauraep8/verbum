import React, {useRef, useEffect, useState} from 'react'
import {useSelector } from 'react-redux';
import DropMenuList from '../DropMenuList/DropMenuList'
import './GrammarFeature.scss'
import DropMenuButton from '../DropMenuButton/DropMenuButton'
import DropMenu from '../DropMenu/DropMenu';




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
  const onFocusDropmenu = (e) =>{
    dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--hidden')
    dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--active')
    console.log(e.target, 'etarget')
    console.log(e.currentTarget, 'currentTarget')
    // if (e.currentTarget === e.target) {
    //   dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--hidden')
    //   dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--active')
    //   console.log('focused self');
    // } else {
    //   console.log('focused child', e.target);
    //   console.log(e.target)
    //   dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--active')
    //   dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--hidden')
    // }
    // if (!e.currentTarget.contains(e.relatedTarget)) {
    //   // Not triggered when swapping focus between children
    //   dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--active')
    //   dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--hidden')
    //   console.log('focus entered self');
    // }
  }

  const onBlurDropmenu = (e) =>{
    dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--active')
    dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--hidden')

    // if (e.currentTarget === e.target) {
    //   console.log('unfocused self');
    //   dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--active')
    //   dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--hidden')
    // } else {
    //   console.log('unfocused child', e.target);
    //   dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--hidden')
    //   dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--active')
    // }
    // if (!e.currentTarget.contains(e.relatedTarget)) {
    //   // Not triggered when swapping focus between children
    //   dropmenuWrapper.current.classList.remove('grammarFeature__dropmenu-wrapper--hidden')
    //   dropmenuWrapper.current.classList.add('grammarFeature__dropmenu-wrapper--active')
    //   console.log('focus left self');
    // }
  }


if (props.shuffleState === undefined || props.shuffleState.length === 0 ) {
    return (
      <div className='GrammarFeature'>
        <div className='grammarFeature__container' >
          {/* <DropMenuButton type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}/>
          <div className='grammarFeature__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenuList list={props.option} type={props.type}/>
          </div> */}
          <DropMenu type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange} list={props.option}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='GrammarFeature'>
        <div className='grammarFeature__container'>
          {/* <DropMenuButton type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}/>
          <div className='grammarFeature__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenuList list={props.option} type={props.type}/>
          </div> */}
           <DropMenu type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange} list={props.option}/>
        </div>
      </div>
    )
  }
}
