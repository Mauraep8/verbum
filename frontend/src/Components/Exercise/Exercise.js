import React, {useEffect} from 'react'
import Answer from '../Answer/Answer'
import PopupMessage from "../PopupMessage/PopupMessage";
import { personArray, genderArray, numberArray, tenseArray, moodArray } from '../../Utils/GrammarArrayValue'
import {useSelector, useDispatch} from 'react-redux'
import './Exercise.scss'
import Shuffle from '../Shuffle/Shuffle'
import { shuffleArray } from '../../Utils/shuffleArray'
import { genderShuffled, moodShuffled, personShuffled, tenseShuffled, numberShuffled, verbShuffled, answerCompared} from "../../Store/exerciseSlice";
import GrammarFeature from '../GrammarFeature/GrammarFeature';




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
  const userAnswer = useSelector(((state) => state.exercise.userAnswerState))
  const apiAnswer = useSelector(((state) => state.exercise.apiAnswerState))
  const resultAnswer = useSelector(((state) => state.exercise.resultAnswerState))



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

            // if verb is clore #70, take out imparfait and passe simple
            if (verbResult.result.bescherelleId === 70){
              const filteredTense = shuffleState.tenseArrayChecked.filter((obj) =>
                  obj.value === "présent" || 
                  obj.value === "passé composé"||
                  obj.value === "plus-que-parfait" || 
                  obj.value === "passé antérieur" || 
                  obj.value === "futur simple" || 
                  obj.value === "futur antérieur"
              );
              const shuffledTense = shuffleArray(filteredTense)
              dispatch(tenseShuffled(shuffledTense)) 
              return shuffledTense
            
            // if verb is traire #61 or absoudre #72, take out passe simple
            } else if (verbResult.result.bescherelleId === 61 || verbResult.result.bescherelleId === 72){
              const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value !== 'passé simple')
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
            
            // if verb is traire #61 or clore #70 or #72, take out imparfait
            if (verbResult.result.bescherelleId === 61|| verbResult.result.bescherelleId === 70 || verbResult.result.bescherelleId === 72){
              const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent' || obj.value === 'plus-que-parfait')
              const shuffledTense = shuffleArray(filteredTense)
              dispatch(tenseShuffled(shuffledTense)) 
              return shuffledTense

            } else {
              const filteredTense = shuffleState.tenseArrayChecked.filter(obj => obj.value === 'passé' || obj.value === 'présent' || obj.value === 'imparfait' || obj.value === 'plus-que-parfait')        
              const shuffledTense = shuffleArray(filteredTense)
              dispatch(tenseShuffled(shuffledTense)) 
              return shuffledTense
            }

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

          //verbs #45 pleuvoir #46 falloir, 50# seoir and messeoir only in 3rd person
          if (verbResult.result.bescherelleId === 45 || verbResult.result.bescherelleId === 46 || verbResult.result.bescherelleId === 50){
            const filteredPerson = shuffleState.personArrayChecked.filter(obj => obj.value === '3ème')
            const shuffledPerson = shuffleArray(filteredPerson)
            dispatch(personShuffled(shuffledPerson))
            return shuffledPerson
          } else {
            // if imperatif
            if (moodResult.result.value === 'impératif') {

              // clore imperatif present
              if (verbResult.result.bescherelleId ===70 && tenseResult.result.value === 'présent'){
                const filteredPerson = shuffleState.personArrayChecked.filter(obj => obj.value === '2ème')
                const shuffledPerson = shuffleArray(filteredPerson)
                dispatch(personShuffled(shuffledPerson))
                return shuffledPerson
              } else{

              const filteredPerson = shuffleState.personArrayChecked.filter(obj => obj.value !== '3ème')
              const shuffledPerson = shuffleArray(filteredPerson)
              dispatch(personShuffled(shuffledPerson))
              return shuffledPerson
              }  
            // all other moods
            } else {
              const shuffledPerson = shuffleArray(shuffleState.personArrayChecked)
              dispatch(personShuffled(shuffledPerson))
              return shuffledPerson
            }
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
            
            // clore imperatif present only in singulier
          } else if (verbResult.result.bescherelleId===70 && moodResult.result.value === 'impératif' && tenseResult.result.value === 'présent' ){
            const filteredNumber = shuffleState.numberArrayChecked.filter(obj => obj.value === 'singulier')
            const shuffledNumber = shuffleArray(filteredNumber)
            dispatch(numberShuffled(shuffledNumber))
            return shuffledNumber
          
          // pleuvoir and falloir only in singulier 
          } else if (verbResult.result.bescherelleId===45 || verbResult.result.bescherelleId===46  ){
            const filteredNumber = shuffleState.numberArrayChecked.filter(obj => obj.value === 'singulier')
            const shuffledNumber = shuffleArray(filteredNumber)
            dispatch(numberShuffled(shuffledNumber))
            return shuffledNumber
             // all other moods and persons and verbs
          } else {
            const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked)
            dispatch(numberShuffled(shuffledNumber))
            return shuffledNumber
          }        
        }
        const numberResult = shuffleNumber()

        const shuffleGender = () => {
          // if verb is pleuvoir id 45

          if (verbResult.result.bescherelleId === 45){
            const filteredGender = shuffleState.genderArrayChecked.filter(obj => obj.value === 'masculin')
            const shuffledGender = shuffleArray(filteredGender)
            dispatch(genderShuffled(shuffledGender))
            
          } else {
            const shuffledGender = shuffleArray(shuffleState.genderArrayChecked)
            dispatch(genderShuffled(shuffledGender))
            return shuffledGender
          }
        }
        const genderResult = shuffleGender()
      
      }
  },[shuffleState])

 useEffect(() => {
  if (userAnswer.length !== 0 && apiAnswer.length !==0){
    const compareAnswer = () =>{
      if (typeof userAnswer === 'string' && typeof apiAnswer === 'string'){
        if (userAnswer===apiAnswer){
          // console.log(true)
          // console.log(userAnswer)
          return {user: true, answer: userAnswer}
        } else {
          // console.log(false)
          // console.log(apiAnswer)
          return {user: false, answer: apiAnswer}
        }
      }

    }
    const result = compareAnswer(userAnswer, apiAnswer)
    dispatch(answerCompared(result))
  }
 },[userAnswer, apiAnswer])
 
//  console.log(resultAnswer)



  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <PopupMessage messageError={messageState} messageWarning={messageWarning}/>
          <h2 className='exercise__header'>Exercise</h2>
          <p className='exercise__text'>Customize, shuffle and answer the conjugation exercise.</p>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <GrammarFeature shuffleState={personState} option={personArray} type='person'/>
              <GrammarFeature shuffleState={genderState} option={genderArray} type='gender'/>
              <GrammarFeature shuffleState={numberState} option={numberArray} type='number'/>
              <GrammarFeature shuffleState={tenseState} option={tenseArray} type='tense'/>
              <GrammarFeature shuffleState={moodState} option={moodArray} type='mood'/>
            </div>
            <GrammarFeature shuffleState={verbState} option={verbListState} type='verb'/>
            <div className='exercise__answer-container'>
              <Answer answer={resultAnswer} />
              <Shuffle/>
            </div>
          </div>
        </div>
      </div>
    )
}
