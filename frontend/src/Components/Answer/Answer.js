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
    // console.log(answerInput.current.value)
    if (answerInput.current.value === ''){
      console.error('empty')
    } else {
      dispatch(answerWritten(answerInput.current.value))
      const storeState = store.getState().exercise
      
      const verb = storeState.verbState.result.value
      const mood = storeState.moodState.result.apiFormat
      const tense = storeState.tenseState.result.apiFormat
      const person = storeState.personState.result.apiFormat
      const number = storeState.numberState.result.apiFormat
      const gender = storeState.genderState.result

      // console.log(person, 'person')
      // console.log(number, 'number')
      // console.log(gender, 'gender') if gender is elle or il

      // console.log(tense)
      // console.log(verb)
      if (mood === 'imperatif'){
        axios.get(`http://localhost:8000/conjugate/fr/${verb}?mood=${mood}`)
        .then(result => {
          fetchAnswer(result.data.value[`imperatif-${tense}`])
        })
        .catch(error =>{
          console.log(error)
        })
        
      } else {
      axios.get(`http://localhost:8000/conjugate/fr/${verb}?mood=${mood}&tense=${tense}`)
      .then(result => {
        // console.log(result.data.value)
        fetchAnswer(result.data.value)
      })
      .catch(error =>{
        console.log(error)
      })
      }
      
      const fetchAnswer = (array) =>{
     
        if (mood === 'imperatif'){
          if (person === 1){
          dispatch(answerFetched((array[1])))
          } else if (person === 2){
            if (number === 1) {
              dispatch(answerFetched((array[0])))
            } else if (number === 2){
              dispatch(answerFetched((array[2])))
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
