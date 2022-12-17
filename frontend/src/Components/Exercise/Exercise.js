import React, {useEffect} from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'
import PopupMessage from "../PopupMessage/PopupMessage";
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/grammarArrayValue'
import {useSelector, useDispatch} from 'react-redux'
import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'
import { shuffleArray } from '../../Utils/shuffleArray'
import { genderShuffled, moodShuffled, personShuffled, tenseShuffled, numberShuffled, verbShuffled} from "../../Store/exerciseSlice";




export default function Exercise() {


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
  const verbState = useSelector(((state) => state.exercise.verbState))

  const dispatch = useDispatch()
  
  useEffect(() => {
      
        // AT INITIAL RENDER SHUFFLESTATE = [], BEFORE SHUFFLE CLICKED 
        // ONLY RUN WHEN SHUFFLE ACTION IS APPROVED
        if (shuffleState.length !== 0 || shuffleAction === true){

        //VERB SHUFFLE 
        const shuffleVerb = () =>{

          const shuffledVerb = shuffleArray(shuffleState.verbArrayChecked)
          dispatch(verbShuffled(shuffledVerb))        
          return shuffledVerb
        }
        const verbResult = shuffleVerb()
       
        // MOOD SHUFFLE
        const shuffleMood = () =>{

           //verbs without imperatif #45 pleuvoir #46 falloir
          if (verbResult.result.bescherelleId === 43 || verbResult.result.bescherelleId === 45 || verbResult.result.bescherelleId === 46){
            const filteredMood = shuffleState.moodArrayChecked.filter(obj => obj.value !== 'impératif')
            const shuffledMood = shuffleArray(filteredMood)
            dispatch(moodShuffled(shuffledMood))
            return shuffledMood

          // if verb is gesir # 372, only in indicatif
          } else if (verbResult.result.bescherelleId === 372)  {
            const filteredMood = shuffleState.moodArrayChecked.filter(obj => obj.value === 'indicatif')
            const shuffledMood = shuffleArray(filteredMood)
            dispatch(moodShuffled(shuffledMood))
            return shuffledMood
          
          } else {
            const shuffledMood = shuffleArray(shuffleState.moodArrayChecked)
            dispatch(moodShuffled(shuffledMood))
            return shuffledMood
          }
        }
        const moodResult = shuffleMood()       

        // TENSE SHUFFLE
        const shuffleTense = () =>{

          // if indicatif
          if (moodResult.result.value === 'indicatif'){

            // if verb is gesir # 372, only in present & imparfait
            if (verbResult.result.bescherelleId === 372){
              const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'présent' || obj.value === 'imparfait')
              const shuffledTense = shuffleArray(filteredTense)
              dispatch(tenseShuffled(shuffledTense)) 
              return shuffledTense

            } else {
            const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value !== 'passé')
            const shuffledTense = shuffleArray(filteredTense)
            dispatch(tenseShuffled(shuffledTense)) 
            return shuffledTense
            }
                       
          // if imperatif
          } else if (moodResult.result.value === 'impératif') {

            // if verb id #3 or #4 and imperatif 
            if (verbResult.result.bescherelleId === 3 || verbResult.result.bescherelleId === 4){
              const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'présent')
              const shuffledTense = shuffleArray(filteredTense)
              dispatch(tenseShuffled(shuffledTense)) 
              return shuffledTense
            } else {
              const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent')
              const shuffledTense = shuffleArray(filteredTense)
              dispatch(tenseShuffled(shuffledTense)) 
              return shuffledTense
            }

          // if subjonctif
          } else if (moodResult.result.value === 'subjonctif') {
            const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent' || obj.value === 'imparfait' || obj.value === 'plus-que-parfait')        
            const shuffledTense = shuffleArray(filteredTense)
            dispatch(tenseShuffled(shuffledTense)) 
            return shuffledTense

          // if conditionnel
          } else if (moodResult.result.value === 'conditionnel') {
            const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent' )
            const shuffledTense = shuffleArray(filteredTense)
            dispatch(tenseShuffled(shuffledTense)) 
            return shuffledTense
          }
        }
        const tenseResult = shuffleTense()

        //PERSON SHUFFLE 
        const shufflePerson = () =>{

          //verbs #45 pleuvoir #46 falloir only in 3rd person

          // if imperatif
          if (moodResult.result.value === 'impératif') {
            const filteredPerson = shuffleState.personArrayChecked.filter(obj => obj.value !== '3ème')
            console.log(filteredPerson)
            const shuffledPerson = shuffleArray(filteredPerson)
            dispatch(personShuffled(shuffledPerson))
            return shuffledPerson

          // all other moods
          } else {
            const shuffledPerson = shuffleArray(shuffleState.personArrayChecked)
            dispatch(personShuffled(shuffledPerson))
            return shuffledPerson
          }
        }
        const personResult = shufflePerson()

        //SHUFFLE NUMBER
        const shuffleNumber = () =>{

          // if mood imperatif and if person is 1
          if (moodResult.result.value === 'impératif' && personResult.result.value === '1er' ) {
          
              const filteredNumber = shuffleState.numberArrayChecked.filter(obj => obj.value === 'pluriel')
              const shuffledNumber = shuffleArray(filteredNumber)
              dispatch(numberShuffled(shuffledNumber))
              return shuffledNumber

          // all other moods and persons
          } else {
            const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
            dispatch(numberShuffled(shuffledNumber))
            return shuffledNumber
          }        
        }
        const numberResult = shuffleNumber()

        const shuffleGender = () => {

          //if mood is imperatif
          if (moodResult.result.value === 'impératif') {
            const shuffledGender = shuffleArray(null)
            dispatch(genderShuffled(shuffledGender))

          // all other moods  
          } else {

          // if person not 3rd = blank gender
          if (personResult.result.value !== '3ème'){
            const shuffledGender = shuffleArray(null)
            dispatch(genderShuffled(shuffledGender))
          } else{
            const filteredGender = shuffleState.genderArrayChecked.filter(obj => obj.value !== '-none-')
            const shuffledGender = shuffleArray(filteredGender)
            dispatch(genderShuffled(shuffledGender))
          }
        }
        }
        const genderResult = shuffleGender()
      
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
            <Verb shuffleState={verbState} option={verbListState}/>
            <Answer/>
            <Shuffle/>
          </div>
        </div>
      </div>
    )
}
