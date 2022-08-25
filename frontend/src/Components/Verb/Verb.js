import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import DropMenu from '../DropMenu/DropMenu'
import './Verb.scss'

export default function Verb() {

  const {newVerbList} = useContext(ThemeContext)
  console.log(newVerbList)
  return (
    <div className='verb'>
        <DropMenu/>
    </div>
  )
}
