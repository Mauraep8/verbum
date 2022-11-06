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
 
const shuffleState = useSelector(((state)=> state.exercise.shuffleState))

let mood
let tense
let number
let gender
let person

const shuffleOption = () =>{
    if (shuffleState.length !== 0){
    mood = shuffleArray(shuffleState.moodArrayChecked)
    tense = shuffleArray(shuffleState.tenseArrayChecked)
    number = shuffleArray(shuffleState.numberArrayChecked)
    gender = shuffleArray(shuffleState.genderArrayChecked)
    person = shuffleArray(shuffleState.personArrayChecked)
    }
 
  }
  shuffleOption()

  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar shuffleState={person} option={personArray} type='person'/>
              <Grammar shuffleState={gender} option={genderArray} type='gender'/>
              <Grammar shuffleState={number} option={numberArray} type='number'/>
              <Grammar shuffleState={tense} option={tenseArray} type='tense'/>
              <Grammar shuffleState={mood} option={moodArray} type='mood'/>
            </div>
            {/* <Verb/> */}
            <Answer/>
            <Shuffle/>
          </div>
        </div>
      </div>
    )
}
