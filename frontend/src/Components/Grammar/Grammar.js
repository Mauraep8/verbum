import React, {useRef} from 'react'
import DropMenuGrammar from '../DropMenu/DropMenuGrammar'
import DropMenu from '../DropMenu/DropMenuGrammar'
import './Grammar.scss'


export default function Grammar(props) {

  const dropmenuWrapper = useRef ([])

  const handlerDropmenu = () =>{
    if (dropmenuWrapper.current.classList.value === 'grammar__dropmenu-wrapper--hidden'){
      dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--hidden')
      dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--active')
    } else {
      dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--active')
      dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--hidden')

    }
  }

  return (
    <div className='grammar'>
      <button className='grammar__button' onClick={handlerDropmenu}>{props.value[0].option}</button>
      <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
        <DropMenuGrammar value={props.value}/>
      </div>
    </div>
  )
}
