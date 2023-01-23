import React, {useEffect, useRef, useState} from 'react'
import './Answer.scss'
import {useSelector, useDispatch} from 'react-redux'
import { answerFetched, answerWritten } from '../../Store/exerciseSlice';
import { store } from "../../Store/configureStore";
import  axios from "axios";


export default function Answer(props) {

  const dispatch = useDispatch()

  const answerInput = useRef([])
  const inputWarning = useRef([])
  const falseAnswerText = useRef([])
  const correctAnswerText = useRef([])


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

      // todo
      // if the verb is falloir, pleuvoir are only in the 3rd person sing, so you need to find proper array position
      // if the verb is messeoir or seoir its only in the 3rd person plural or singular

      // GET ANSWER FROM RestAPI
      axios.get(`http://localhost:8000/conjugate/fr/${verb}?mood=${mood}`)
      .then(result => {
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
        if (mood === 'imperatif'){
          // 1st person
          if (person === 1){
            // feminize ending if auxiliary is etre, feminin and passé gender==='féminin'
            if (verbObject.auxiliaryVerb==="être"  && gender==='féminin' && tense==='passé'){
              const answer = array[1].slice(0,-1) + 'es'
              dispatch(answerFetched(answer))
              // no feminization
            } else {
              dispatch(answerFetched((array[1])))
            }

            // 2nd person
          } else if (person === 2){
            // singular
            if (number === 1) {
              // feminize ending if auxiliary is etre, feminin and passé gender==='féminin'
              if (verbObject.auxiliaryVerb==="être" && gender==='féminin' && tense==='passé'){
                dispatch(answerFetched((array[0] + 'e')))
                
                // no feminization
              } else {
                dispatch(answerFetched((array[0])))
              }

              // plural
            } else if (number === 2){
              // feminize ending if auxiliary is etre, feminin and passé gender==='féminin'
                if (verbObject.auxiliaryVerb==="être"  && tense==='passé'){
                const answer = array[2].slice(0,-1) + 'es'
                dispatch(answerFetched(answer))

              // no feminization
              } else {
                dispatch(answerFetched((array[2])))
              }
            }
          }

          // feminizing the 3rd person pronoun qu'il to qu'elle in subjunctif
        } else if (mood === 'subjonctif'){
          
          let answer

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

          // singular
          if (number === 1) {
            if (person === 3 && gender==='féminin'){
                // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
                const feminizedPronoun = answer.replace(/qu'il/,`qu'elle`)
                const feminizedAnswer = feminizedPronoun + 'e'
                dispatch(answerFetched((feminizedAnswer)))
                // regular verbs in 3rd person
              } else{
                const feminizedAnswer = answer.replace(/qu'il/,`qu'elle`)
                dispatch(answerFetched(feminizedAnswer))
              }
            } else if((person===2 || person===1) &&  gender==='féminin'){
              // aller add e for person 1,2
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
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

            if (person===3 && gender==='féminin'){
              // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
                const feminizedPronoun = answer.replace(/qu'ils/,`qu'elles`) 
                const feminizedAnswer = feminizedPronoun.slice(0,-1) + 'es'
                dispatch(answerFetched(feminizedAnswer))

              } else{
                const feminizedAnswer = answer.replace(/qu'ils/,`qu'elles`) 
                dispatch(answerFetched(feminizedAnswer))                
              }

            } else if((person===1||person===2) && gender==='féminin'){
              // aller add an e
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
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

          // singular     
          if (number === 1) {

            if (person===3 && gender==='féminin'){
              // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
              const feminizedPronoun = answer.replace(/il/,'elle')
              const feminizedAnswer = feminizedPronoun + 'e'
              dispatch(answerFetched((feminizedAnswer)))
                
              // regular verbs in 3rd person
              } else {
                const feminizedAnswer = answer.replace(/il/,'elle')
                dispatch(answerFetched(feminizedAnswer))
              }
            } else if((person===2 || person===1) &&  gender==='féminin'){
              // aller add 'e' to person 1, 2
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
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

            if (person===3 && gender==='féminin'){
              // aller 3rd person change pronoun and add 'e'
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé" || tense === "passé-composé" || tense === 'passé-antérieur' || tense === 'futur-antérieur')){
                const feminizedPronoun = answer.replace(/ils/,`elles`) 
                const feminizedAnswer = feminizedPronoun.slice(0,-1) + 'es'
                dispatch(answerFetched(feminizedAnswer))
                // regular verbs change pronoun
              } else{
                const feminizedAnswer = answer.replace(/ils/,`elles`) 
                dispatch(answerFetched(feminizedAnswer))                
              }

            } else if((person===1||person===2) && gender==='féminin'){
              // aller add an es
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé" || tense === "passé-composé" || tense === 'passé-antérieur' || tense === 'futur-antérieur')){
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
    } else {
      answerInput.current.classList.add('answer__input-text--correct')
      correctAnswerText.current.classList.remove('answer__text--display-hidden')
      correctAnswerText.current.classList.add('answer__text--visible')

    }
  } else {
    answerInput.current.classList.remove('answer__input-text--error')
    falseAnswerText.current.classList.remove('answer__text--visible')
    correctAnswerText.current.classList.remove('answer__text--visible')
    correctAnswerText.current.classList.add('answer__text--display-hidden')
    answerInput.current.value = ''
  }
 }, [props.answer])
 
  return (
    <div className='answer'>
      <form className='answer__form'>
        <div className='answer__input-container'>
         <span className='answer__text--hidden' ref={correctAnswerText}>Correct!</span>
          <span className='answer__text--hidden' ref={falseAnswerText}>correct answer: {correctAnswer}</span>
          <input className='answer__input' type="text" placeholder='Answer'ref={answerInput}/>
          <span className='answer__text--hidden' ref={inputWarning}>! Please enter your answer</span>
        </div>
        <button className='answer__button' onClick={verify}>Verify</button>
      </form>
    </div>
  )
}
