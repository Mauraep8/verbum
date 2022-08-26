import React, {useContext, useState, useEffect} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import DropMenu from '../DropMenu/DropMenu'
import './Verb.scss'

export default function Verb() {

  const [dropList, setDropList] = useState(['aimer', 'avoir'])
  
  const {newVerbList} = useContext(ThemeContext)

  useEffect (()=>{
    setDropList(newVerbList)
  },[newVerbList]);

  return (
    <div className='verb'>
        <DropMenu dropList={newVerbList}/>
    </div>
  )
}
