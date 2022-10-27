import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import exerciseSlice, { exerciseShuffled} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";


export default function Shuffle() {
  const dispatch = useDispatch()

  
  const {exercise} = store.getState()

  // console.log(exercise)
  return (
    <div>
      <button className='answer__button' onClick={()=>{dispatch(exerciseShuffled({exercise}))}}>Shuffle</button>
    </div>
  )
}
