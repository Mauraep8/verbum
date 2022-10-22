import React from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/grammarArrayValue'
import {useSelector} from 'react-redux'

import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'

export default function Exercice() {
  // const {personArrayChecked, genderArrayChecked, numberArrayChecked, tenseArrayChecked, moodArrayChecked} = useSelector((state)=> state.exercise)
  // console.log(personArrayChecked)
  const {shuffleState} = useSelector((state)=> state.exercise)

  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar shuffleState={shuffleState} option={personArray}/>
              <Grammar shuffleState={shuffleState} option={genderArray}/>
              <Grammar shuffleState={shuffleState} option={numberArray}/>
              <Grammar shuffleState={shuffleState}  option={tenseArray}/>
              <Grammar shuffleState={shuffleState} option={moodArray}/>
            </div>
            {/* <Verb/> */}
            <Answer/>
            <Shuffle/>
          </div>
        </div>
      </div>
    )
}
