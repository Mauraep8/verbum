import React, {useEffect, useRef, useState} from 'react'
import './Answer.scss'
import {useDispatch} from 'react-redux'
import { answerFetched, answerWritten } from '../../Store/exerciseSlice';
import { store } from "../../Store/configureStore";
import  axios from "axios";
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { imperativeAnswerFeminization } from '../../Utils/grammarLogic/imperative/imperativeAnswerFeminization';
import { subjunctiveAnswerFeminization } from '../../Utils/grammarLogic/subjunctive/subjunctiveAnswerFeminization';
import { otherMoodAnswerFeminization } from '../../Utils/grammarLogic/otherMoodAnswerFeminization';
import { subjunctive } from "../../Utils/grammarTerms";
import Shuffle from "../Shuffle/Shuffle";


export default function Answer(props) {

  const dispatch = useDispatch()

  const answerInput = useRef([])
  const inputWarning = useRef([])
  const falseAnswerText = useRef([])
  const correctAnswerText = useRef([])
  const correctCheckmark = useRef([])
  const falseX = useRef([])

  const [correctAnswer, setCorrectAnswer ] = useState([])


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

        const imperativeAnswer = imperativeAnswerFeminization (array, verbObject, tense, number, gender, person)
        dispatch(answerFetched(imperativeAnswer))

        
        // feminizing the 3rd person pronoun qu'il to qu'elle in subjunctif
      } else if (mood === subjunctive){

        const subjunctiveAnswer = subjunctiveAnswerFeminization (array,arrayIndex,verbObject,tense,number,gender,person)
        dispatch(answerFetched(subjunctiveAnswer))

      //ALL OTHER MOODS, feminizing the 3rd person pronoun il to elle 
      } else {

        const otherMoodAnswer = otherMoodAnswerFeminization (array,arrayIndex,verbObject,tense,number,gender,person)
        dispatch(answerFetched(otherMoodAnswer))

      } 
    }          
  }   
}
 
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
        <div className='answer__main-button-container'>
          <div className='answer__button-container'>
            <ButtonPrimary function={verify} text={'Verify'} icon={'verify'}/>
          </div>
          <div className='answer__button-container'>
            <Shuffle />
          </div>
        </div>
      </form>
    </div>
  )
}
