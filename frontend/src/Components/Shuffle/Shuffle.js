import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import exerciseSlice, { shuffleClicked} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";


export default function Shuffle() {
  const dispatch = useDispatch()

  return (
    <div>
      <button className='answer__button' onClick={()=>{dispatch(shuffleClicked(store.getState()))}}>Shuffle</button>
    </div>
  )
}
