import React, {useRef, useState, useEffect} from 'react'
import DropMenu from '../DropMenu/DropMenu'
import './Grammar.scss'
import { shuffleArray } from "../../Utils/shuffleArray";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { exerciseShuffled} from "../../Store/exerciseSlice";


export default function Grammar(props) {
  const dropmenuWrapper = useRef ([])

  // console.log(props.shuffleState)
 
 
  const handlerDropmenu = () =>{
    if (dropmenuWrapper.current.classList.value === 'grammar__dropmenu-wrapper--hidden'){
      dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--hidden')
      dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--active')
    } else {
      dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--active')
      dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--hidden')

    }
  }

  if (props.shuffleState === undefined) {
  return (
    <div className='grammar'>
      <button className='grammar__button' onClick={handlerDropmenu}>{props.option[0].option}</button>
      <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
        <DropMenu value={props.option}/>
      </div>
    </div>
  )
  } else {
    return (
      <div className='grammar'>
        <button className='grammar__button' onClick={handlerDropmenu}>{props.shuffleState.value}</button>
        <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
          <DropMenu value={props.option}/>
        </div>
      </div>
    )
  }
}
