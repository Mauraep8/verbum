import React, {useContext, useState, useEffect} from 'react'
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


  return (
    <div className='verb'>
        <DropMenuVerb dropList={dropList}/>
    </div>
  )
}
