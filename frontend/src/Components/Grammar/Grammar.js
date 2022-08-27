import React from 'react'
import DropMenuGrammar from '../DropMenu/DropMenuGrammar'
import DropMenu from '../DropMenu/DropMenuGrammar'
import './Grammar.scss'


export default function Grammar(props) {

  return (
    <div className='grammar'>
      <button className='grammar__button'>{props.value[0].option}</button>
      <DropMenuGrammar value={props.value}/>
    </div>
  )
}
