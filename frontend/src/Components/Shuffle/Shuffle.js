import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import { shuffleApproved, shuffleDenied, userSelectionDenied} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";


export default function Shuffle() {

  const dispatch = useDispatch()

  const getStore = () => {

    // STATE OF STORE AND TURN INTO ARRAY
    const storeState = store.getState().exercise

    const asArray = Object.entries(storeState)

    const filteredArray = asArray.filter(([key])=> key.includes('Checked'))

    console.log(filteredArray[5][1])

    // STATUS OF DROPMENUS, ONLY WHEN LOOP REMAINS TRUE DOES LOOP CONTINUE AND EVENTUALLY TRIGGER SHUFFLE
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

    let selectionApproved = true

    const verifyUserSelection = () => {

      const moodArray = storeState.moodArrayChecked.map(element => element.value)
      const tenseArray = storeState.tenseArrayChecked.map(element => element.value)
      const personArray = storeState.personArrayChecked.map(element => element.value)
      const numberArray = storeState.numberArrayChecked.map(element => element.value)
      const genderArray = storeState.genderArrayChecked.map(element => element.value)

      // VERIFY INDICATIF
      if (moodArray.includes('indicatif') === true) {
        if (tenseArray.includes('présent') === false && tenseArray.includes('passé composé') === false && tenseArray.includes('imparfait') === false && tenseArray.includes('plus-que-parfait') === false && tenseArray.includes('passé simple') === false  && tenseArray.includes('passé antérieur') === false && tenseArray.includes('futur simple') === false && tenseArray.includes('futur antérieur') === false){
          dispatch(userSelectionDenied({mood: 'indicatif', person: null, missingTense: ['présent','passé composé','imparfait','plus-que-parfait','passé simple','passé antérieur','futur simple','futur antérieur'], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false          
        }
      }  

      // VERIFY IMPERATIF
      if (moodArray.includes('impératif') === true) {
        if (tenseArray.includes('présent') === false && tenseArray.includes('passé') === false){
          dispatch(userSelectionDenied({mood: 'impératif', person: null, missingTense: ['présent','passé'], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
        if(personArray.includes('1er') === true && numberArray.includes('pluriel') === false){
          dispatch(userSelectionDenied({mood: 'impératif', person: '1er', missingTense: null , missingPerson: null, missingNumber:'pluriel', missingGender: null}))
          selectionApproved = false
        }
        if(personArray.includes('1er') === false && personArray.includes('2ème') === false){
          dispatch(userSelectionDenied({mood: 'impératif', person: null, missingTense: null , missingPerson: ['1er','2ème'], missingNumber: null, missingGender: null}))
          selectionApproved = false
        }
      }

      // VERIFY SUBJONCTIF
      if (moodArray.includes('subjonctif') === true) {
        if (tenseArray.includes('présent') === false && tenseArray.includes('passé') === false && tenseArray.includes('imparfait') === false && tenseArray.includes('plus-que-parfait') === false ){
          dispatch(userSelectionDenied({mood: 'subjonctif', person: null, missingTense: ['présent','passé','imparfait','plus-que-parfait'], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
      }

      // VERIFY CONDITIONNEL
      if (moodArray.includes('conditionnel') === true) {
        if (tenseArray.includes('présent') === false && tenseArray.includes('passé') === false){
          dispatch(userSelectionDenied({mood: 'conditionnel', person: null, missingTense: ['présent','passé'], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
      }

      //VERIFY 3rd PERSON GENDER
      if ((moodArray.includes('conditionnel') === true || moodArray.includes('subjonctif') === true || moodArray.includes('indicatif') === true) && (personArray.includes('3ème') === true && genderArray.includes('féminin') === false && (genderArray.includes('masculin') === false))) {
        dispatch(userSelectionDenied({mood: null, person: '3ème', missingTense: null, missingPerson: null, missingNumber: null, missingGender: ['féminin', 'masculin']}))
        selectionApproved = false
      }
    } 
    verifyUserSelection()


    if (storeState.messageState.length === 0 && storeState.userSelectionMessage.length === 0){
      if (allDropmenuChecked === true && selectionApproved === true){
      dispatch(shuffleApproved(store.getState().exercise))
      }
    }
 
    allDropmenuChecked = null
  }

  return (
      <div>
        <button className='answer__button' onClick={getStore}>Shuffle</button>
      </div>
  )
}
