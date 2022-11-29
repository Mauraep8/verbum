import React, {useContext, useState, useEffect, useRef} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import DropMenuVerb from '../DropMenu/DropMenuVerb';
import './Verb.scss'

export default function Verb() {

  return (
    <div className='verb'>
        <button className='verb__button'>Verb</button>
        <div className='verb__dropmenu-wrapper--hidden'>
          {/* <DropMenuVerb /> */} 
        </div>
    </div>
  )
}
