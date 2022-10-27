import React from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/grammarArrayValue'
import {useSelector} from 'react-redux'

import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'
import { shuffleArray } from '../../Utils/shuffleArray'

export default function Exercice() {
 
  const {shuffleState} = useSelector((state)=> state.exercise)

  console.log('exercise-component', shuffleState)

  const shuffleOption = () =>{
  if (shuffleState.length === 0) return
  for (let i = 0; i < shuffleState.length; i++) {
    const singleArray = shuffleState[i];
    console.log(singleArray.genderArray.length)
    // console.log(singleArray.personArray.length)
    // console.log(singleArray.genderArray.length)
    // console.log(singleArray.numberArray.length)
    // console.log(singleArray.tenseArray.length)
    // console.log(singleArray.moodArray.length)

    // if (singleArray.personArray.length === 0) {
    //   return
    // } else {
    //   // shuffleArray(singleArray.personArray)
    // }
    
  }

  }
// shuffleOption()


  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar shuffleState={shuffleState} option={personArray} type='person'/>
              <Grammar shuffleState={shuffleState} option={genderArray} type='gender'/>
              <Grammar shuffleState={shuffleState} option={numberArray} type='number'/>
              <Grammar shuffleState={shuffleState} option={tenseArray} type='tense'/>
              <Grammar shuffleState={shuffleState} option={moodArray} type='mood'/>
            </div>
            {/* <Verb/> */}
            <Answer/>
            <Shuffle/>
          </div>
        </div>
      </div>
    )
}
