import React from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/GrammarArrayValue'
import './Exercise.scss'

export default function Exercice() {

  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar value={personArray}/>
              <Grammar value={genderArray}/>
              <Grammar value={numberArray}/>
              <Grammar value={tenseArray}/>
              <Grammar value={moodArray}/>
            </div>
            {/* <Verb/> */}
            <Answer/>
          </div>
        </div>
      </div>
    )
}
