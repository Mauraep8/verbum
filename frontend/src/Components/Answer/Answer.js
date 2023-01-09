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
      const gender = storeState.genderState.result

    
      // verbObject.auxiliaryVerb === "être" && (tense.value==='passé-composé'||tense.value==='plus-que-parfait'||tense.value==='passé-antérieur'||tense.value==='futur-antérieur'||tense.value==='passé')){


      // todo
      // add default state, so that should you verify on initial state the web doesnt break
      // if answer is empty if verify is pressed 
      // if gender is fem need to change answer
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
        console.log(array)

        // Imperatif request comes in array of 3 potential answers
        if (mood === 'imperatif'){
          // 1st person
          if (person === 1){
            // feminize ending if auxiliary is etre, feminin and passé gender==='féminin'
            if (verbObject.auxiliaryVerb==="être"  && gender==='féminin' && tense.value==='passé'){
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
              if (verbObject.auxiliaryVerb==="être" && gender==='féminin' && tense.value==='passé'){
                dispatch(answerFetched((array[0] + 'e')))
                
                // no feminization
              } else {
                dispatch(answerFetched((array[0])))
              }

              // plural
            } else if (number === 2){
              // feminize ending if auxiliary is etre, feminin and passé gender==='féminin'
                if (verbObject.auxiliaryVerb==="être"  && tense.value==='passé'){
                const answer = array[2].slice(0,-1) + 'es'
                dispatch(answerFetched(answer))

              // no feminization
              } else {
                dispatch(answerFetched((array[2])))
              }
            }
          }
        } else if(person === 3 && gender !== null){
          if (gender.value === 'féminin'){

            const arrayIndex = person * number
            console.log(tense)
            console.log((array[arrayIndex -1]))

            if (mood === 'subjonctif'){
              if (number === 1) {
              const answer = array[arrayIndex -1]
              const genderizedAnswer = answer.replace(/qu'il/,`qu'elle`)
              console.log(genderizedAnswer)
              } else {
                const answer = array[arrayIndex -1]
                const genderizedAnswer = answer.replace(/qu'ils/,`qu'elles`) 
                console.log(genderizedAnswer)
              }
            // all other moods
            } else{
              if (number === 1) {
                const answer = array[arrayIndex -1]
                const genderizedAnswer = answer.replace(/il/,`elle`)
                console.log(genderizedAnswer)
                console.log(verbObject)
                } else {
                  const answer = array[arrayIndex -1]
                  const genderizedAnswer = answer.replace(/ils/,`elles`) 
                  console.log(genderizedAnswer)
                }

            }

          }


        } else {
        const arrayIndex = person * number
        dispatch(answerFetched((array[arrayIndex -1])))
        }
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
