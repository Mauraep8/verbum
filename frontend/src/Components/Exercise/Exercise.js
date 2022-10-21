import React from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/GrammarArrayValue'
import {useSelector} from 'react-redux'

import './Exercise.scss'

export default function Exercice() {
  const {personArrayChecked, genderArrayChecked, numberArrayChecked, tenseArrayChecked, moodArrayChecked} = useSelector((state)=> state.exercise)

  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar checkedOption={personArrayChecked} option={personArray}/>
              <Grammar checkedOption={genderArrayChecked} option={genderArray}/>
              <Grammar checkedOption={numberArrayChecked} option={numberArray}/>
              <Grammar checkedOption={tenseArrayChecked} option={tenseArray}/>
              <Grammar checkedOption={moodArrayChecked} option={moodArray}/>
            </div>
            {/* <Verb/> */}
            <Answer/>
          </div>
        </div>
      </div>
    )
}
