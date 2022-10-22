import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import { exerciseShuffled} from "../../Store/exerciseSlice";

export default function Shuffle() {
  const dispatch = useDispatch()

  return (
    <div>
      <button className='answer__button' onClick={()=>{dispatch(exerciseShuffled({shuffle:true}))}}>Shuffle</button>
    </div>
  )
}
