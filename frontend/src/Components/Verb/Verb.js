import React, {useRef, useEffect} from 'react'

import DropMenuVerb from '../DropMenu/DropMenuVerb';
import Dropmenu from "../DropMenu/DropMenu";
import './Verb.scss'

export default function Verb(props) {

  const dropmenuWrapper = useRef ([])
  const dropmenuButton = useRef ([])

   // WHEN BUTTON IS CLICKED, DROPMENU OPENS AND CLOSES
   const handlerDropmenu = () =>{
    if (dropmenuWrapper.current.classList.value === 'verb__dropmenu-wrapper--hidden'){
      dropmenuWrapper.current.classList.remove('verb__dropmenu-wrapper--hidden')
      dropmenuWrapper.current.classList.add('verb__dropmenu-wrapper--active')
    } else {
      dropmenuWrapper.current.classList.remove('verb__dropmenu-wrapper--active')
      dropmenuWrapper.current.classList.add('verb__dropmenu-wrapper--hidden')
    }
  }
  // console.log(props.verbList)
  if (props.verbList.length !== 0){
  return (
    <div className='verb'>
        <button className='verb__button' onClick={handlerDropmenu} ref={dropmenuButton}>{props.verbList[0].verbName}</button>
        <div className='verb__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
         <Dropmenu verb={props.verbList} value={null}/>
        </div>
    </div>
  )
}
}
