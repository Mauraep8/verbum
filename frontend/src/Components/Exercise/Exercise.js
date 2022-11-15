import React, {useEffect, useState} from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/grammarArrayValue'
import {useSelector, useDispatch} from 'react-redux'
import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'
import { shuffleArray } from '../../Utils/shuffleArray'
import { genderShuffled, moodShuffled, personShuffled, tenseShuffled, numberShuffled } from "../../Store/exerciseSlice";


export default function Exercise() {
 
  const shuffleState = useSelector(((state)=> state.exercise.shuffleState))
  const moodState = useSelector(((state)=> state.exercise.moodState))
  const tenseState = useSelector(((state) => state.exercise.tenseState))
  const personState = useSelector(((state) => state.exercise.personState))
  const numberState = useSelector(((state) => state.exercise.numberState))
  const genderState = useSelector(((state) => state.exercise.genderState))

  const dispatch = useDispatch()


  useEffect(() => {

        if (shuffleState.length !== 0){

        // MOOD SHUFFLE 
        const shuffledMood = shuffleArray(shuffleState.moodArrayChecked)
        console.log(shuffledMood.result)
        dispatch(moodShuffled(shuffledMood))


        // IF MOOD === INDICATIF
        if (shuffledMood.result.value === 'indicatif' || shuffledMood.result === null){

          // TENSE
          const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value !== 'passé')
          const shuffledTense = shuffleArray(filteredTense)
          dispatch(tenseShuffled(shuffledTense)) 

          // PERSON
          const shuffledPerson = shuffleArray(shuffleState.personArrayChecked)
          dispatch(personShuffled(shuffledPerson))

          // NUMBER
          const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
          dispatch(numberShuffled(shuffledNumber))

          // GENDER
          if (shuffledPerson.result.value !== '3ème'){
            const shuffledGender = shuffleArray(null)
            dispatch(genderShuffled(shuffledGender))
          } else{
            const shuffledGender = shuffleArray(shuffleState.genderArrayChecked)
            dispatch(genderShuffled(shuffledGender))
          }
        }


        // IF MOOD === IMPERATIF
        if (shuffledMood.result.value === 'impératif'){

          // TENSE
          const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent')
          const shuffledTense = shuffleArray(filteredTense)
          dispatch(tenseShuffled(shuffledTense)) 

          // PERSON
          const filteredPerson = shuffleState.personArrayChecked.filter(obj => obj.value !== '3ème')
          const shuffledPerson = shuffleArray(filteredPerson)
          dispatch(personShuffled(shuffledPerson))

          // NUMBER
          if (shuffledPerson.result.value === '1er'){
            const filteredNumber = shuffleState.numberArrayChecked.filter(obj => obj.value === 'pluriel')
            const shuffledNumber = shuffleArray(filteredNumber)
            dispatch(numberShuffled(shuffledNumber))
          } else{
            const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
            dispatch(numberShuffled(shuffledNumber))
          }

          // GENDER
          const shuffledGender = shuffleArray(null)
          dispatch(genderShuffled(shuffledGender))
        }


        // IF MOOD === SUBJONCTIF
        if (shuffledMood.result.value === 'subjonctif'){

          //TENSE
          const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent' || obj.value === 'imparfait' || obj.value === 'plus-que-parfait')        
          const shuffledTense = shuffleArray(filteredTense)
          dispatch(tenseShuffled(shuffledTense)) 

          // PERSON
          const shuffledPerson = shuffleArray(shuffleState.personArrayChecked)
          dispatch(personShuffled(shuffledPerson))

          // NUMBER
          const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
          dispatch(numberShuffled(shuffledNumber))
          
          // GENDER
          if (shuffledPerson.result.value !== '3ème'){
            const shuffledGender = shuffleArray(null)
            dispatch(genderShuffled(shuffledGender))
          } else{
            const shuffledGender = shuffleArray(shuffleState.genderArrayChecked)
            dispatch(genderShuffled(shuffledGender))
          }
        }

        if (shuffledMood.result.value === 'conditionnel' ){

          //TENSE
          const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent' )
          const shuffledTense = shuffleArray(filteredTense)
          dispatch(tenseShuffled(shuffledTense)) 

          // PERSON
          const shuffledPerson = shuffleArray(shuffleState.personArrayChecked)
          dispatch(personShuffled(shuffledPerson))
                    
          // NUMBER
          const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
          dispatch(numberShuffled(shuffledNumber))
                    
          // GENDER
          if (shuffledPerson.result.value !== '3ème'){
            const shuffledGender = shuffleArray(null)
            dispatch(genderShuffled(shuffledGender))
          } else{
            const shuffledGender = shuffleArray(shuffleState.genderArrayChecked)
            dispatch(genderShuffled(shuffledGender))
          }
        }
      }
  },[shuffleState])

  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar shuffleState={personState} option={personArray} type='person'/>
              <Grammar shuffleState={genderState} option={genderArray} type='gender'/>
              <Grammar shuffleState={numberState} option={numberArray} type='number'/>
              <Grammar shuffleState={tenseState} option={tenseArray} type='tense'/>
              <Grammar shuffleState={moodState} option={moodArray} type='mood'/>
            </div>
            {/* <Verb/> */}
            <Answer/>
            <Shuffle/>
          </div>
        </div>
      </div>
    )
}
