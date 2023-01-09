import React, {useRef} from 'react'
import './Answer.scss'
import { useDispatch} from 'react-redux';
import { answerFetched, answerWritten } from '../../Store/exerciseSlice';
import { store } from "../../Store/configureStore";
import  axios from "axios";


export default function Answer() {

  const dispatch = useDispatch()
  const answerInput = useRef([])

  const verify = (e)=>{
    e.preventDefault()

    if (answerInput.current.value === ''){
      console.error('empty')
    } else {
      dispatch(answerWritten(answerInput.current.value))
      const storeState = store.getState().exercise
      
      const verbObject = storeState.verbState.result
      const verb = storeState.verbState.result.value
      const mood = storeState.moodState.result.apiFormat
      const tense = storeState.tenseState.result.apiFormat
      const person = storeState.personState.result.apiFormat
      const number = storeState.numberState.result.apiFormat
      const gender = storeState.genderState.result.value

      // todo
      // add default state, so that should you verify on initial state the web doesnt break
      // if answer is empty if verify is pressed 
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
        console.log(mood)
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
              if(verbObject.auxiliaryVerb === "être" && (tense=== 'plus-que-parfait' || tense === "passé")){
                const feminizedAnswer = answer + 'e'
                dispatch(answerFetched((feminizedAnswer)))
                // regular verbs in 3rd person
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

          // feminizing the 3rd person pronoun il to elle in all other moods
        } else {
          // singular
          console.log('byu')
          const answer = array[(arrayIndex - 1)]
          // console.log(arrayIndex)
          if (number === 1) {
            if (person===3 && gender==='féminin'){
              const feminizedAnswer = answer.replace(/il/,`elle`)
              dispatch(answerFetched(feminizedAnswer))
              } else {
                dispatch(answerFetched(answer))
              }
          } else if (number===2){
            if (person===3 && gender==='féminin'){
              const feminizedAnswer = answer.replace(/ils/,`elles`) 
              dispatch(answerFetched(feminizedAnswer))
            } else {
              dispatch(answerFetched(answer))
            }
          }
        }  
        // console.log('hello')
        // console.log(mood)
        // console.log(verbObject.auxiliaryVerb)
        // console.log(gender)
        // console.log(tense)
        // if (
        //   mood !== "imperatif" &&
        //   verbObject.auxiliaryVerb === "être" && 
        //   gender==='féminin' &&
        //   (tense === "passé-composé" ||
        //     tense === "plus-que-parfait" ||
        //     tense === "passé-antérieur" ||
        //     tense === "futur-antérieur" ||
        //     tense === "passé")
        // ) {
        //   // console.log('hello')
        //     const answer = array[arrayIndex -1]
        //     if (number===1){
        //       dispatch(answerFetched((answer + 'e')))
        //     } else if (number===2){
        //       const feminizedAnswer = answer.slice(0,-1) + 'es'
        //       dispatch(answerFetched(feminizedAnswer))
        //     }   
        // }

      }
    } 
  }



  return (
    <div className='answer'>
      <form className='answer__form'>
        <input className='answer__input' type="text" placeholder='Answer'ref={answerInput}/>
        <button className='answer__button' onClick={verify}>Verify</button>
      </form>
    </div>
  )
}
