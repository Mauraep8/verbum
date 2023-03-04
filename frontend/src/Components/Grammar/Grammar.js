import React, {useRef} from 'react'
import DropMenu from '../DropMenu/DropMenu'
import './Grammar.scss'
import DropMenuButton from '../DropMenuButton/DropMenuButton'




export default function Grammar(props) {

  const dropmenuWrapper = useRef ([])
 
  // WHEN BUTTON IS CLICKED, DROPMENU OPENS AND CLOSES
  const onFocusDropmenu = () =>{
    dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--hidden')
    dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--active')
  }

  const onBlurDropmenu = () =>{
    dropmenuWrapper.current.classList.remove('grammar__dropmenu-wrapper--active')
    dropmenuWrapper.current.classList.add('grammar__dropmenu-wrapper--hidden')
  }

if (props.shuffleState === undefined || props.shuffleState.length === 0 ) {
    return (
      <div className='grammar'>
        <div className='grammar__container' tabIndex={0} onBlur={onBlurDropmenu} onFocus={onFocusDropmenu}>
          <DropMenuButton type={props.type} result={props.option[0].option} colorChange={props.shuffleState.colorChange}/>
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
          <DropMenuButton type={props.type} result={props.shuffleState.result.value} colorChange={props.shuffleState.colorChange}/>
          <div className='grammar__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
            <DropMenu value={props.option} verb={null} type={props.type}/>
          </div>
        </div>
      </div>
    )
  }
}
