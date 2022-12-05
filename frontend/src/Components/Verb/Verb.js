import React, {useRef, useEffect} from 'react'

// import DropMenuVerb from '../DropMenu/DropMenuVerb';
import Dropmenu from "../DropMenu/DropMenu";
import './Verb.scss'
import { useDispatch, useSelector } from 'react-redux';
import { verbListUpdateAction } from '../../Store/exerciseSlice';

export default function Verb(props) {

  const verbListApprovedUpdate = useSelector((state)=> state.exercise.verbListApprovedUpdate) 

  // const [updatedList, setUpdatedList] = useState([])
  const dropmenuWrapper = useRef ([])
  const dropmenuButton = useRef ([])

  const dispatch = useDispatch()

    // WHEN VERBLIST IS UPDATED BUTTONS TURN GREEN MOMENTARILY
    useEffect(() => {
      if (verbListApprovedUpdate === true){
          dropmenuButton.current.classList.remove('verb__button--inactive')
          dropmenuButton.current.classList.add('verb__button--active')
  
          setTimeout(() => {
            dropmenuButton.current.classList.add('verb__button--inactive')
            dropmenuButton.current.classList.remove('verb__button--active')
  
          }, 400);     
        dispatch(verbListUpdateAction(false))
      }   
    })

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

  //WHEN VERBS ARE UPDATED, BUTTON AND TEXT TURNS GREEN
  // const updatedVerb = () => {
  //   if (props.option.updatedList === true){
  //     console.log('updated')
  //   }
  // }

  // updatedVerb()

  // console.log(props.verbList)

  //PROPS IS AN EMPTY ARRAY UPON MOUNT BEFORE INITIAL RENDER
  if (props.option.length !== 0){
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
