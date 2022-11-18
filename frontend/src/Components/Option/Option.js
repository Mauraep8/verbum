import React, {useState, useEffect} from 'react'
import './Option.scss'
import { useDispatch } from "react-redux";
import { optionChecked} from "../../Store/exerciseSlice";

export default function Option(props) {

  const [checked, setChecked] = useState(true)
  const dispatch = useDispatch()
 

  useEffect(()=>{
    dispatch(optionChecked({value:props.value, status:checked, category:props.category}))
  },[checked])


  return (
    <div className='option' onClick={()=>{setChecked(!checked)}}>
      <input type="checkbox" checked={checked} onChange={()=>{setChecked(!checked)}} />
      <p className='option__text'>{props.value}</p>
    </div>
  )

}
