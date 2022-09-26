import React, {useContext, useState, useEffect, useRef} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import DropMenuVerb from '../DropMenu/DropMenuVerb';
import './Verb.scss'

export default function Verb() {

  const initialState = ['aimer', 'avoir']

  const {value} = useContext(ThemeContext)

  const [dropList, setDropList] = useState(initialState)
 
    useEffect(()=>{
      setDropList(value.state)
    },[value.state]) 
  
  //DROPMENU OPEN CLOSE FUNC
  const dropmenuWrapper = useRef ([])

  const handlerDropmenu = () =>{
    if (dropmenuWrapper.current.classList.value === 'verb__dropmenu-wrapper--hidden'){
      dropmenuWrapper.current.classList.remove('verb__dropmenu-wrapper--hidden')
      dropmenuWrapper.current.classList.add('verb__dropmenu-wrapper--active')
    } else {
      dropmenuWrapper.current.classList.remove('verb__dropmenu-wrapper--active')
      dropmenuWrapper.current.classList.add('verb__dropmenu-wrapper--hidden')

    }
  }

  return (
    <div className='verb'>
        <button className='verb__button' onClick={handlerDropmenu}>{dropList[0]}</button>
        <div className='verb__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
          <DropMenuVerb dropList={dropList}/>
        </div>
    </div>
  )
}
