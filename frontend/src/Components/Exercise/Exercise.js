import React, {useEffect, useState} from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/grammarArrayValue'
import {useSelector, useDispatch} from 'react-redux'
import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'
import { shuffleArray } from '../../Utils/shuffleArray'
import { exerciseShuffled } from "../../Store/exerciseSlice";


export default function Exercise() {
 
  const shuffleState = useSelector(((state)=> state.exercise.shuffleState))
  const dispatch = useDispatch()

  const [mood, setMood] = useState(shuffleState)
  const [tense, setTense] = useState(shuffleState)
  const [number, setNumber] = useState(shuffleState)
  const [gender, setGender] = useState(shuffleState)
  const [person, setPerson] = useState(shuffleState)

  useEffect(() => {
        if (shuffleState.length !== 0){

        const shuffledMood = shuffleArray(shuffleState.moodArrayChecked)
        setMood(shuffledMood)

        const shuffledTense = shuffleArray(shuffleState.tenseArrayChecked)
        setTense(shuffledTense)

        const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
        setNumber(shuffledNumber)

        const shuffledGender = shuffleArray(shuffleState.genderArrayChecked)
        setGender(shuffledGender)

        const shuffledPerson = shuffleArray(shuffleState.personArrayChecked)
        setPerson(shuffledPerson)
      
        dispatch(exerciseShuffled({mood:shuffledMood.result, tense:shuffledTense.result, number:shuffledNumber.result, gender:shuffledGender.result, person:shuffledPerson.result}))
      }
  },[shuffleState])

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
