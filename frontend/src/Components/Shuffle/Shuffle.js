import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import { shuffleApproved, shuffleDenied} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";


export default function Shuffle() {

  const dispatch = useDispatch()

  const getStore = () => {

    // STATE OF STORE AND TURN INTO ARRAY
    const storeState = store.getState().exercise
    const asArray = Object.entries(storeState)
    const filteredArray = asArray.filter(([key])=> key.includes('Checked'))

    // STATUS OF DROPMENUS, ONLY WHEN LOOP REMAINS TRUE DOES SHUFFLE GET TRIGGERED
    let allDropmenuChecked = true

    // IF ONE DROPMENUS NOT CHECKED THEN SHUFFLE DENIED
    const verifyDropmenuStatus = () => {
      for (let i = 0; i < filteredArray.length; i++) {
        const element = filteredArray[i];
        if (allDropmenuChecked === true){
           if (element[1].length === 0){
              dispatch(shuffleDenied(element[0]))
              allDropmenuChecked = false
            } 
        }
      }
    }
    verifyDropmenuStatus()

    // IF ALL DROPMENU CHECKED THEN SHUFFLE IS TRIGGERED
    if (allDropmenuChecked === true){
        dispatch(shuffleApproved(store.getState().exercise))
    } 
  }
  
  return (
      <div>
        <button className='answer__button' onClick={getStore}>Shuffle</button>
      </div>
  )
}
