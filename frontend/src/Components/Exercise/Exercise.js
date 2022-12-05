import React, {useEffect, useState} from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import PopupMessage from "../PopupMessage/PopupMessage";
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/grammarArrayValue'
import {useSelector, useDispatch} from 'react-redux'
import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'
import { shuffleArray } from '../../Utils/shuffleArray'
import { genderShuffled, moodShuffled, personShuffled, tenseShuffled, numberShuffled} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";



export default function Exercise() {
 
  // const userVerbList = userSelector(((state)=> state.exercise.shuffleAction))
  // const storeDatabaseState = store.getState().database.userLibrary

  const verbListState = useSelector(((state)=> state.exercise.verbListState))


  const shuffleAction = useSelector(((state)=> state.exercise.shuffleAction))
  const shuffleState = useSelector(((state)=> state.exercise.shuffleState))
  const messageState = useSelector(((state)=> state.exercise.messageState))
  const messageWarning = useSelector(((state)=> state.exercise.userSelectionMessage))
  const moodState = useSelector(((state)=> state.exercise.moodState))
  const tenseState = useSelector(((state) => state.exercise.tenseState))
  const personState = useSelector(((state) => state.exercise.personState))
  const numberState = useSelector(((state) => state.exercise.numberState))
  const genderState = useSelector(((state) => state.exercise.genderState))

  const dispatch = useDispatch()



// console.log(storeDatabaseState)
  useEffect(() => {
      
        // AT INITIAL RENDER SHUFFLESTATE = [], BEFORE SHUFFLE CLICKED 
        // ONLY RUN WHEN SHUFFLE ACTION IS APPROVED
        if (shuffleState.length !== 0 || shuffleAction === true){

        // MOOD SHUFFLE 
        const shuffledMood = shuffleArray(shuffleState.moodArrayChecked)
        dispatch(moodShuffled(shuffledMood))

        // IF MOOD === INDICATIF
        if (shuffledMood.result.value === 'indicatif'){

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
            const filteredGender = shuffleState.genderArrayChecked.filter(obj => obj.value !== '-none-')
            const shuffledGender = shuffleArray(filteredGender)
            dispatch(genderShuffled(shuffledGender))
          }

        // IF MOOD === IMPERATIF
        } else if (shuffledMood.result.value === 'impératif'){

          // TENSE
          const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent')
          const shuffledTense = shuffleArray(filteredTense)
          dispatch(tenseShuffled(shuffledTense)) 

          // PERSON
          const filteredPerson = shuffleState.personArrayChecked.filter(obj => obj.value !== '3ème' || obj.value !== null )
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

          // IF MOOD === SUBJONCTIF
        } else if (shuffledMood.result.value === 'subjonctif'){

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
            const filteredGender = shuffleState.genderArrayChecked.filter(obj => obj.value !== '-none-')
            const shuffledGender = shuffleArray(filteredGender)
            dispatch(genderShuffled(shuffledGender))
          }

          // IF MOOD === CONDITIONNEL
        } else if (shuffledMood.result.value === 'conditionnel' ){

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
            const filteredGender = shuffleState.genderArrayChecked.filter(obj => obj.value !== '-none-')
            const shuffledGender = shuffleArray(filteredGender)
            dispatch(genderShuffled(shuffledGender))
          }
        }
      }
  },[shuffleState])


  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <PopupMessage messageError={messageState} messageWarning={messageWarning}/>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar shuffleState={personState} option={personArray} type='person'/>
              <Grammar shuffleState={genderState} option={genderArray} type='gender'/>
              <Grammar shuffleState={numberState} option={numberArray} type='number'/>
              <Grammar shuffleState={tenseState} option={tenseArray} type='tense'/>
              <Grammar shuffleState={moodState} option={moodArray} type='mood'/>
            </div>
            <Verb option={verbListState}/>
            <Answer/>
            <Shuffle/>
          </div>
        </div>
      </div>
    )
}
