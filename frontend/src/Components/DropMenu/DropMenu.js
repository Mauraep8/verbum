import React, {useContext, useState, useEffect} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenu(props) {

  console.log(props)
  // if (props.droplist.[0])
  return (
    <div className='dropmenu'>
      <h3>verb</h3>
      {/* <button>{dropList[0].verb}</button>
      <div>
      {dropList.map((singleVerb) =>{
                    return <Option
                    key={singleVerb.id}
                    verbName={singleVerb.verb}
      />
                })}
      </div> */}
    </div>
  )
}
