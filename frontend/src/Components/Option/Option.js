import React, {useState, useEffect} from 'react'
import './Option.scss'
import { useDispatch } from "react-redux";
import { optionChecked} from "../../Store/exerciseSlice";

export default function Option(props) {

  const [checked, setChecked] = useState(true)
  const dispatch = useDispatch()
  // console.log(props)
 

  useEffect(()=>{
    dispatch(optionChecked({value:props.value, status:checked, category:props.category}))
  },[checked])

  if (props.optionType === 'grammar'){
  return (
    <div className='option' onClick={()=>{setChecked(!checked)}}>
      <input type="checkbox" checked={checked} onChange={()=>{setChecked(!checked)}} />
      <p className='option__text'>{props.value}</p>
    </div>
  )
} else if (props.optionType === 'verb'){
  return (
    <div className='option' onClick={()=>{setChecked(!checked)}}>
      <input type="checkbox" checked={checked} onChange={()=>{setChecked(!checked)}} />
      <p className='option__text'>{props.value}</p>
    </div>
  )
}
}
