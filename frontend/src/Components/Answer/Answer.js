import React, {useEffect, useRef, useState} from 'react'
import './Answer.scss'
import {useSelector, useDispatch} from 'react-redux'
import { answerFetched, answerWritten } from '../../Store/exerciseSlice';
import { store } from "../../Store/configureStore";
import  axios from "axios";
import Shuffle from '../Shuffle/Shuffle'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { imperativeAnswerFetch } from '../../Utils/grammarLogic/imperative/imperativeAnswerFetch';

import {
  conditional,
  feminin,
  firstPerson,
  futurAnterieur,
  futurSimple,
  imparfait,
  imperative,
  indicative,
  masculin,
  passe,
  passeAnterieur,
  passeCompose,
  passeSimple,
  plural,
  plusQueParfait,
  present,
  secondPerson,
  singular,
  subjunctive,
  thirdPerson,
} from "../../Utils/grammarTerms";


export default function Answer(props) {

  const dispatch = useDispatch()

  const answerInput = useRef([])
  const inputWarning = useRef([])
  const falseAnswerText = useRef([])
  const correctAnswerText = useRef([])
  const correctCheckmark = useRef([])
  const falseX = useRef([])


  const [correctAnswer, setCorrectAnswer ] = useState([])

  const verify = (e)=>{

    e.preventDefault()
    
    // if input is empty with no answer
    if (answerInput.current.value === ''){
      answerInput.current.classList.add('answer__input--error')
      inputWarning.current.classList.add('answer__text--visible')


    } else {

      //remove error if it's there
      answerInput.current.classList.remove('answer__input--error')
      inputWarning.current.classList.remove('answer__text--visible')

      //dispatch user's answer
      dispatch(answerWritten(answerInput.current.value))
    
      // get storeState
      const storeState = store.getState().exercise      
      const verbObject = storeState.verbState.result
      const verb = storeState.verbState.result.value
      const mood = storeState.moodState.result.apiFormat
      const tense = storeState.tenseState.result.apiFormat
      const person = storeState.personState.result.apiFormat
      const number = storeState.numberState.result.apiFormat
      const gender = storeState.genderState.result.value

      console.log(mood)

      console.log(verbObject)
      // GET ANSWER FROM RestAPI
      axios.get(`http://localhost:8000/conjugate/fr/${verb}?mood=${mood}`)
      .then(result => {

          //**imperatif here is in the apiformat**//
        if (mood==='imperatif'){
          fetchAnswer(result.data.value[`imperatif-${tense}`])
          
          // all other moods
        } else{
          fetchAnswer(result.data.value[`${tense}`]) 
        }
      })
      .catch(error =>{
        console.log(error)
      })

      // FETCHANSWER FUNCTION REFINES ANSWER REQUEST FROM OBJECT TO STRING
      const fetchAnswer = (array) =>{
        
        const arrayIndex = person * number

          // Imperatif request comes in array of 3 potential answers
          //**imperatif here is in the apiformat**//
        if (mood === 'imperatif'){

          const imperativeAnswer = imperativeAnswerFetch (array, verbObject, tense, number, gender, person)
          dispatch(answerFetched(imperativeAnswer))

          
          // feminizing the 3rd person pronoun qu'il to qu'elle in subjunctif
        } else if (mood === subjunctive){
          
          let answer

          //if verb is pleuvoir or falloir 
          if(verbObject.value === 45 || verbObject.value === 46){
            answer = array[0]

          // ALL OTHER VERBS   
          } else {
          // nous pronoun index
          if (person === 1 && number === 2){
            answer = array[3]

            // vous pronoun index
          } else if(person ===2 && number===2){
            answer = array[4]

            // all other pronoun index
          } else{
            answer = array[(arrayIndex -1)]
          }
        }

          // singular
          if (number === 1) {
            if (person === 3 && gender===feminin && verbObject.value!==45){
                // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe)){
                const feminizedPronoun = answer.replace(/qu'il/,`qu'elle`)
                const feminizedAnswer = feminizedPronoun + 'e'
                dispatch(answerFetched((feminizedAnswer)))
                // regular verbs in 3rd person
              } else{
                const feminizedAnswer = answer.replace(/qu'il/,`qu'elle`)
                dispatch(answerFetched(feminizedAnswer))
              }
            } else if((person===2 || person===1) &&  gender===feminin){
              // aller add e for person 1,2
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe)){
                const feminizedAnswer = answer + 'e'
                dispatch(answerFetched((feminizedAnswer)))
                // regular verbs no e
              } else{
                dispatch(answerFetched(answer))
              }
            } else { 
              dispatch(answerFetched(answer))
            }

          //plural
          } else if(number===2) {

            if (person===3 && gender===feminin){
              // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe)){
                const feminizedPronoun = answer.replace(/qu'ils/,`qu'elles`) 
                const feminizedAnswer = feminizedPronoun.slice(0,-1) + 'es'
                dispatch(answerFetched(feminizedAnswer))

              } else{
                const feminizedAnswer = answer.replace(/qu'ils/,`qu'elles`) 
                dispatch(answerFetched(feminizedAnswer))                
              }

            } else if((person===1||person===2) && gender===feminin){
              // aller add an e
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe)){
                const feminizedAnswer = answer.slice(0,-1) + 'es'
                dispatch(answerFetched(feminizedAnswer))
  
              }else{
                dispatch(answerFetched(answer))
              }
            } else{
              dispatch(answerFetched(answer))
            }

          }

          // ALL OTHER MOODS, feminizing the 3rd person pronoun il to elle 
        } else {
          
          let answer

          // if verb is pleuvoir or falloir
          if(verbObject.value === 45 || verbObject.value === 46){
            answer = array[0]

            // all other verbs
          } else {
            // nous pronoun index
            if (person === 1 && number === 2){
              answer = array[3]
              // vous pronoun index
            } else if(person ===2 && number===2){
              answer = array[4]
              // all other pronoun index
            } else{
              answer = array[(arrayIndex -1)]
            }
          }

          // singular     
          if (number === 1) {

            if (person===3 && gender===feminin){
              // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe)){
              const feminizedPronoun = answer.replace(/il/,'elle')
              const feminizedAnswer = feminizedPronoun + 'e'
              dispatch(answerFetched((feminizedAnswer)))
                
              // regular verbs in 3rd person
              } else {
                const feminizedAnswer = answer.replace(/il/,'elle')
                dispatch(answerFetched(feminizedAnswer))
              }
            } else if((person===2 || person===1) &&  gender===feminin){
              // aller add 'e' to person 1, 2
              if(verbObject.auxiliaryVerb === "être" && (tense===plusQueParfait || tense === passe)){
                const feminizedAnswer = answer + 'e'
                dispatch(answerFetched((feminizedAnswer)))
                // regular verbs no e
              } else{
                dispatch(answerFetched(answer))
              }
            } else { 
              dispatch(answerFetched(answer))
            }
          //plural
          } else if(number===2) {

            if (person===3 && gender===feminin){
              // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe || tense === passeCompose || tense === passeAnterieur || tense === futurAnterieur)){
                const feminizedPronoun = answer.replace(/ils/,`elles`) 
                const feminizedAnswer = feminizedPronoun.slice(0,-1) + 'es'
                dispatch(answerFetched(feminizedAnswer))
                // regular verbs change pronoun
              } else{
                const feminizedAnswer = answer.replace(/ils/,`elles`) 
                dispatch(answerFetched(feminizedAnswer))                
              }

            } else if((person===1||person===2) && gender===feminin){
              // aller add an es
              if(verbObject.auxiliaryVerb === "être" && (tense=== plusQueParfait || tense === passe || tense === passeCompose || tense === passeAnterieur || tense === futurAnterieur)){
                const feminizedAnswer = answer.slice(0,-1) + 'es'
                dispatch(answerFetched(feminizedAnswer))
              // regular verbs
              }else{
                dispatch(answerFetched(answer))
              }
            // all other persons or genders
            } else{
              dispatch(answerFetched(answer))
            }

          }
        } 
      }          
    }   
  }

 useEffect(() => {
  answerInput.current.classList.remove('answer__input-text--correct')
  if (props.answer.length !==0){
    if(props.answer.user === false){
      falseAnswerText.current.classList.add('answer__text--visible')
      answerInput.current.classList.add('answer__input-text--error')
      setCorrectAnswer(props.answer.answer)
      falseX.current.classList.add('bi-x--visible')

    } else {
      answerInput.current.classList.add('answer__input-text--correct')
      correctAnswerText.current.classList.remove('answer__text--hidden')
      correctAnswerText.current.classList.add('answer__text--visible')
      correctCheckmark.current.classList.add('bi-check--visible')


    }
  } else {
    answerInput.current.classList.remove('answer__input-text--error')
    falseAnswerText.current.classList.remove('answer__text--visible')
    correctAnswerText.current.classList.remove('answer__text--visible')
    correctAnswerText.current.classList.add('answer__text--hidden')
    answerInput.current.value = ''
    correctCheckmark.current.classList.remove('bi-check--visible')
    falseX.current.classList.remove('bi-x--visible')

  }
 }, [props.answer])
 
  return (
    <div className='answer'>
      <form className='answer__form'>
        <div className='answer__text-container'>
            <p className='answer__text answer__text--hidden answer__text--primary' ref={correctAnswerText}>Correct!</p>
            <p className='answer__text answer__text--hidden answer__text--secondary' ref={falseAnswerText}>Answer: {correctAnswer}</p>
            <p className='answer__text answer__text--hidden answer__text--secondary' ref={inputWarning}>Please enter your answer</p>
          </div>
        <div className='answer__input-container'>
          <input className='answer__input' type="text" placeholder='Answer'ref={answerInput}/>
          <i className="bi bi-check" ref={correctCheckmark}></i>
          <i className="bi bi-x" ref={falseX}></i>
        </div>
        <div className='answer__button-container'>
          <ButtonPrimary function={verify} text={'Verify'}/>
        </div>
      </form>
    </div>
  )
}
