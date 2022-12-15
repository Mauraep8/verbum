import React, {useRef} from 'react'
import './Answer.scss'
import { useDispatch} from 'react-redux';
import { answerWritten } from '../../Store/exerciseSlice';
import { store } from "../../Store/configureStore";
import  axios from "axios";


export default function Answer() {

  const dispatch = useDispatch()
  const answerInput = useRef([])

  // const inputHandler = (e) =>{
  //   console.log(e.target.value)
  // }

  // console.log(inputHandler)

  // const answerResult = inputHandler()

  const verify = (e)=>{
    e.preventDefault()
    console.log(answerInput.current.value)
    if (answerInput.current.value === ''){
      console.error('empty')
    } else {
      dispatch(answerWritten(answerInput.current.value))
      const storeState = store.getState().exercise
      console.log(storeState)

      const verb = storeState.verbState.result.value
      const mood = storeState.moodState.result.value
      const tense = storeState.tenseState.result.apiFormat
      console.log(tense)
      // console.log(verb)
      
      axios.get(`http://localhost:8000/conjugate/fr/${verb}?mood=${mood}&tense=${tense}`)
      .then(result => {
        console.log(result.data.value)
      })
      .catch(error =>{
        console.log(error)
      })

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
