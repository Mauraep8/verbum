import React, {useContext, useState, useEffect} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import DropMenu from '../DropMenu/DropMenu'
import './Verb.scss'

export default function Verb() {

  const initialState = ['aimer', 'avoir']

  const {value} = useContext(ThemeContext)

  // console.log(value.state)

  const [dropList, setDropList] = useState(initialState)
 
    useEffect(()=>{
      setDropList(value.state)
    },[value.state])

    // console.log(dropList)

  return (
    <div className='verb'>
        <DropMenu dropList={dropList}/>
    </div>
  )
}
