import React, {useRef, useEffect} from 'react'

// import DropMenuVerb from '../DropMenu/DropMenuVerb';
import Dropmenu from "../DropMenu/DropMenu";
import './Verb.scss'
import { useDispatch, useSelector } from 'react-redux';
import { verbListUpdateAction } from '../../Store/exerciseSlice';

export default function Verb(props) {

  const verbListApprovedUpdate = useSelector((state)=> state.exercise.verbListApprovedUpdate) 
  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))

  

  const dropmenuWrapper = useRef ([])
  const dropmenuButton = useRef ([])

  const dispatch = useDispatch()

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
   
    useEffect(() => {
       // WHEN VERBLIST IS UPDATED BUTTONS TURN GREEN MOMENTARILY
      if (verbListApprovedUpdate === true){
          dropmenuButton.current.classList.remove('verb__button--inactive-updated')
          dropmenuButton.current.classList.add('verb__button--active-updated')
  
          setTimeout(() => {
            dropmenuButton.current.classList.add('verb__button--inactive-updated')
            dropmenuButton.current.classList.remove('verb__button--active-updated')
  
          }, 400);     
        dispatch(verbListUpdateAction(false))
      }   
      // WHEN SHUFFLE IS CLICKED BUTTONS TURN BLUE MOMENTARILY
      if (shuffleAction === true){
        if (props.shuffleState.colorChange === true){
          dropmenuButton.current.classList.remove('verb__button--inactive-shuffled')
          dropmenuButton.current.classList.add('verb__button--active-shuffled')
  
          setTimeout(() => {
            dropmenuButton.current.classList.add('verb__button--inactive-shuffled')
            dropmenuButton.current.classList.remove('verb__button--active-shuffled')
  
          }, 400);     
        }
      }   
    }) 


    console.log(props)
    if (props.option.length !== 0 ){
      if (props.shuffleState.length !== 0) {
        return (
          <div className='verb'>
              <button className='verb__button' onClick={handlerDropmenu} ref={dropmenuButton}>{props.shuffleState.result.value}</button>
              <div className='verb__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
              <Dropmenu verbList={props.option} value={null}/>
              </div>
          </div>
        )
      } else {
        return (
          <div className='verb'>
              <button className='verb__button' onClick={handlerDropmenu} ref={dropmenuButton}>{props.option[0].verbName}</button>
              <div className='verb__dropmenu-wrapper--hidden' ref={dropmenuWrapper}>
              <Dropmenu verbList={props.option} value={null}/>
              </div>
          </div>
        )
      }
    } 
 

    
  


  //PROPS IS AN EMPTY ARRAY UPON MOUNT BEFORE INITIAL RENDER

}
