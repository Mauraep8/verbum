import React, {useState, useEffect, useRef} from 'react'
import './Option.scss'
import { useDispatch } from "react-redux";
import { optionChecked} from "../../Store/exerciseSlice";

export default function Option(props) {


  const [checked, setChecked] = useState(true)

  const dispatch = useDispatch()
  const input = useRef([])

  function clickHandler(e) {
    e.stopPropagation()
    setChecked(!checked)
  }


  useEffect(()=>{
    dispatch(
      optionChecked({
        value: props.value,
        status: checked,
        category: props.category,
        apiFormat: props.apiFormat,
        label: props.label,
        verbGroup: props.verbGroup,
        specialVerb: props.specialVerb,
        primaryVerb: props.primaryVerb,
        initialVerb: props.initialVerb,
        verbID: props.verbID,
        auxiliaryVerb: props.auxiliaryVerb,
      })
    );
  },[checked])


  return (
    <div className={`option option--${props.dropmenuType}`} onClick={clickHandler}>
      <input className='option__checkbox' type="checkbox" checked={checked}  onClick={clickHandler} onChange={()=>{setChecked(!checked)}} ref={input}/>
      <label className='option__text'>{props.value}</label>
    </div>
  )
}
