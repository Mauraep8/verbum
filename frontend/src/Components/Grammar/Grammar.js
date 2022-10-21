import React, {useRef, useState, useEffect} from 'react'
import DropMenu from '../DropMenu/DropMenu'
import './Grammar.scss'


export default function Grammar(props) {

  // const [buttonText, setButtonText] = useState([])

  // useEffect(() => {
  //   setButtonText(props.checkedOption[0].value)
  // }, [props])

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
      <button className='grammar__button' onClick={handlerDropmenu}>{'buttonText'}</button>
      <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
        <DropMenu value={props.option}/>
      </div>
    </div>
  )
}
