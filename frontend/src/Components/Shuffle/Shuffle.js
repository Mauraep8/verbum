import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import { answerCleared, shuffleApproved, shuffleDenied, userSelectionDenied} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";
import { verbListUpdateAction } from '../../Store/exerciseSlice';
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import './Shuffle.scss'


export default function Shuffle() {

  const dispatch = useDispatch()  

  const getStore = () => {

    // after verblist is updated, must falsify action, to allow shuffling to occur
    dispatch(verbListUpdateAction(false))


    //clear previous answers
    dispatch(answerCleared([]))

    // STATE OF STORE AND TURN INTO ARRAY
    const storeState = store.getState().exercise
    
    const asArray = Object.entries(storeState)

    const filteredArray = asArray.filter(([key])=> key.includes('Checked'))

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

      const verbArray = storeState.verbArrayChecked.map(element => element.value)
      const moodArray = storeState.moodArrayChecked.map(element => element.value)
      const tenseArray = storeState.tenseArrayChecked.map(element => element.value)
      const personArray = storeState.personArrayChecked.map(element => element.value)
      const numberArray = storeState.numberArrayChecked.map(element => element.value)
      const genderArray = storeState.genderArrayChecked.map(element => element.value)
    
      
      //VERIFY CONDITIONS FOR VERB PLEUVOIR #45 AND FALLOIR #46 FOR 3RD PERSON AND FOR MASC GENDER
      if (verbArray.includes('pleuvoir') === true) {
        if(personArray.includes('3ème') === false) {
        dispatch(userSelectionDenied({verb: 'pleuvoir', mood: 'indicatif', person: null, missingMood:null, missingTense: null , missingPerson: '3ème', missingNumber: null, missingGender: null}))
        selectionApproved = false
        } else if(genderArray.includes('masculin') === false) {
          dispatch(userSelectionDenied({verb: 'pleuvoir', mood: 'indicatif', person: null, missingMood:null, missingTense: null , missingPerson: null, missingNumber: null, missingGender: 'masculin'}))
          selectionApproved = false
        } else  if (moodArray.includes('indicatif')===false && moodArray.includes('subjonctif')===false && moodArray.includes('conditionnel')===false){
          dispatch(userSelectionDenied({verb: 'pleuvoir', mood: null, person: null, missingMood: ["indicatif", "subjonctif", "conditionnel"], missingTense: null , missingPerson:null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } else if (numberArray.includes('singulier')===false){
          dispatch(userSelectionDenied({verb: 'pleuvoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:null, missingNumber: 'singulier', missingGender: null}))
          selectionApproved = false
        }
      }

      //VERIFY CONDITIONS FOR FALLOIR #46 FOR 3RD PERSON
      if (verbArray.includes('falloir') === true) {
        if(personArray.includes('3ème') === false) {
        dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood:null,  missingTense: null , missingPerson:'3ème', missingNumber: null, missingGender: null}))
        selectionApproved = false
        } else if (moodArray.includes('indicatif')===false && moodArray.includes('subjonctif')===false && moodArray.includes('conditionnel')===false){
          dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood: ["indicatif", "subjonctif", "conditionnel"], missingTense: null , missingPerson:null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } else if (numberArray.includes('singulier')===false){
          dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:null, missingNumber: 'singulier', missingGender: null}))
          selectionApproved = false
        }
      }

      //VERIFY CONDITIONS FOR SEOIR #50 FOR 3RD PERSON for all moods
      if (verbArray.includes('seoir') === true) {
        if(personArray.includes('3ème') === false) {
        dispatch(userSelectionDenied({verb: 'seoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:'3ème', missingNumber: null, missingGender: null}))
        selectionApproved = false
        }
      }

      //VERIFY CONDITIONS FOR MESSEOIR #50 FOR 3RD PERSON for all moods
      if (verbArray.includes('messeoir') === true) {
        if(personArray.includes('3ème') === false) {
        dispatch(userSelectionDenied({verb: 'messeoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:'3ème', missingNumber: null, missingGender: null}))
        selectionApproved = false
        }
      }

      // VERIFY CONDITIONS FOR INDICATIF
      if (moodArray.includes('indicatif') === true) {

        //verify seoir conditions with indicatif
        if (verbArray.includes("seoir") === true) {
          if (
            tenseArray.includes("présent") === false &&
            tenseArray.includes("imparfait") === false &&
            tenseArray.includes("futur simple") === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "seoir",
                mood: "indicatif",
                person: null,
                missingMood:null, 
                missingTense: ["présent", "imparfait", "futur simple"],
                missingPerson: null,
                missingNumber: null,
                missingGender: null,
              })
            );
            selectionApproved = false;
          }

          //verify messeoir conditions with indicatif
        } else if (verbArray.includes("messeoir")=== true) {
          if (
            tenseArray.includes("présent") === false &&
            tenseArray.includes("imparfait") === false &&
            tenseArray.includes("futur simple") === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "messeoir",
                mood: "indicatif",
                person: null,
                missingMood:null, 
                missingTense: ["présent", "imparfait", "futur simple"],
                missingPerson: null,
                missingNumber: null,
                missingGender: null,
              })
            );
            selectionApproved = false;
          }
          
          //verify traire conditions with indicatif
        } else if (verbArray.includes("traire")=== true) {
          if (
            tenseArray.includes("présent") === false &&
            tenseArray.includes("passé composé") === false &&
            tenseArray.includes("imparfait") === false &&
            tenseArray.includes("plus-que-parfait") === false &&
            tenseArray.includes("passé antérieur") === false &&
            tenseArray.includes("futur simple") === false &&
            tenseArray.includes("futur antérieur") === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "traire",
                mood: "indicatif",
                person: null,
                missingMood:null, 
                missingTense: [              
                "présent",
                "passé composé",
                "imparfait",
                "plus-que-parfait",
                "passé antérieur",
                "futur simple",
                "futur antérieur"],
                missingPerson: null,
                missingNumber: null,
                missingGender: null,
              })
            );
            selectionApproved = false;
            }
          //verify absoudre conditions with indicatif
          } else if (verbArray.includes("absoudre")=== true) {
            if (
              tenseArray.includes("présent") === false &&
              tenseArray.includes("passé composé") === false &&
              tenseArray.includes("imparfait") === false &&
              tenseArray.includes("plus-que-parfait") === false &&
              tenseArray.includes("passé antérieur") === false &&
              tenseArray.includes("futur simple") === false &&
              tenseArray.includes("futur antérieur") === false
            ) {
              dispatch(
                userSelectionDenied({
                  verb: "absoudre",
                  mood: "indicatif",
                  person: null,
                  missingMood:null, 
                  missingTense: [              
                  "présent",
                  "passé composé",
                  "imparfait",
                  "plus-que-parfait",
                  "passé antérieur",
                  "futur simple",
                  "futur antérieur"],
                  missingPerson: null,
                  missingNumber: null,
                  missingGender: null,
                })
              );
              selectionApproved = false;
            }
          //verify clore conditions with indicatif
        } else if (verbArray.includes("clore")===true) {
          if (
            tenseArray.includes("présent") === false &&
            tenseArray.includes("passé composé") === false &&
            tenseArray.includes("plus-que-parfait") === false &&
            tenseArray.includes("passé antérieur") === false &&
            tenseArray.includes("futur simple") === false &&
            tenseArray.includes("futur antérieur") === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "clore",
                mood: "indicatif",
                person: null,
                missingMood:null, 
                missingTense: [
                  "présent",
                  "passé composé",
                  "plus-que-parfait",
                  "passé antérieur",
                  "futur simple",
                  "futur antérieur",
                ],
                missingPerson: null,
                missingNumber: null,
                missingGender: null,
              })
            );
            selectionApproved = false;
          }       

        } else if (
          tenseArray.includes("présent") === false &&
          tenseArray.includes("passé composé") === false &&
          tenseArray.includes("imparfait") === false &&
          tenseArray.includes("plus-que-parfait") === false &&
          tenseArray.includes("passé simple") === false &&
          tenseArray.includes("passé antérieur") === false &&
          tenseArray.includes("futur simple") === false &&
          tenseArray.includes("futur antérieur") === false
        ) {
          dispatch(
            userSelectionDenied({
              verb: null,
              mood: "indicatif",
              person: null,
              missingMood:null, 
              missingTense: [
                "présent",
                "passé composé",
                "imparfait",
                "plus-que-parfait",
                "passé simple",
                "passé antérieur",
                "futur simple",
                "futur antérieur",
              ],
              missingPerson: null,
              missingNumber: null,
              missingGender: null,
            })
          );
          selectionApproved = false;
        }
      }  

      // VERIFY CONDITIONS FOR IMPERATIF
      if (moodArray.includes('impératif') === true) {

        if(verbArray.includes('clore')===true){
          if (tenseArray.includes('présent') === true && personArray.includes('2ème')===false){
            dispatch(userSelectionDenied({verb: 'clore', mood: 'impératif', person: null, missingMood:null, missingTense: null , missingPerson: ['2ème'], missingNumber: null, missingGender: null}))
            selectionApproved = false
          } else if (personArray.includes('2ème')=== true && numberArray.includes('singulier')===false){
            dispatch(userSelectionDenied({verb: "clore", mood: 'impératif', person:'2ème', missingMood:null,  missingTense: null, missingPerson: null, missingNumber: 'singulier', missingGender: null}))
            selectionApproved = false
          }
        } 
        if (tenseArray.includes('présent') === false && tenseArray.includes('passé') === false){
            dispatch(userSelectionDenied({verb: null, mood: 'impératif', person: null, missingMood:null, missingTense: ['présent','passé'], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false
          } 
          if(personArray.includes('1er') === true && numberArray.includes('pluriel') === false){
            dispatch(userSelectionDenied({verb: null, mood: 'impératif', person: '1er',missingMood:null,  missingTense: null , missingPerson: null, missingNumber:'pluriel', missingGender: null}))
            selectionApproved = false
          }
          if(personArray.includes('1er') === false && personArray.includes('2ème') === false){
            dispatch(userSelectionDenied({verb: null, mood: 'impératif', person: null, missingMood:null, missingTense: null , missingPerson: ['1er','2ème'], missingNumber: null, missingGender: null}))
            selectionApproved = false
            }
        
      }
    

      // VERIFY CONDITIONS FOR SUBJONCTIF
      if (moodArray.includes('subjonctif') === true) {

        //verify seoir conditions with subjonctif
        if (verbArray.includes('seoir')){
          if (tenseArray.includes('présent') === false){
              dispatch(userSelectionDenied({verb: 'seoir', mood: 'subjonctif', person: null,missingMood:null,  missingTense: ['présent'], missingPerson: null, missingNumber: null, missingGender: null}))
              selectionApproved = false 
           }
        //verify messeoir conditions with subjonctif
        } else if (verbArray.includes('messeoir')){
          if (tenseArray.includes('présent') === false){
            dispatch(userSelectionDenied({verb: 'messeoir', mood: 'subjonctif', person: null, missingMood:null, missingTense: ['présent'], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        
        //verify traire conditions with subjonctif
        } else if (verbArray.includes('traire')){
          if (tenseArray.includes('présent') === false  && tenseArray.includes('passé') === false && tenseArray.includes('plus-que-parfait') === false ){
            dispatch(userSelectionDenied({verb: 'traire', mood: 'subjonctif', person: null, missingMood:null, missingTense: ['présent','passé','plus-que-parfait'], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        //verify traire conditions with subjonctif
        } else if (verbArray.includes('absoudre')){
          if (tenseArray.includes('présent') === false  && tenseArray.includes('passé') === false && tenseArray.includes('plus-que-parfait') === false ){
            dispatch(userSelectionDenied({verb: 'absoudre', mood: 'subjonctif', person: null, missingMood:null,  missingTense: ['présent','passé','plus-que-parfait'], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        // verify clore conditions with subjonctif
        }  else if (verbArray.includes('clore')){
          if (tenseArray.includes('présent') === false  && tenseArray.includes('passé') === false && tenseArray.includes('plus-que-parfait') === false ){
            dispatch(userSelectionDenied({verb: 'clore', mood: 'subjonctif', person: null, missingMood:null, missingTense: ['présent','passé','plus-que-parfait'], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        
        } else if (tenseArray.includes('présent') === false && tenseArray.includes('passé') === false && tenseArray.includes('imparfait') === false && tenseArray.includes('plus-que-parfait') === false ){
          dispatch(userSelectionDenied({verb: null, mood: 'subjonctif', person: null, missingMood:null, missingTense: ['présent','passé','imparfait','plus-que-parfait'], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
      }

      // VERIFY CONDITIONS FOR CONDITIONNEL
      if (moodArray.includes('conditionnel') === true) {
      
        //verify seoir conditions with conditionnel
        if (verbArray.includes('seoir')){
          if (tenseArray.includes('présent') === false){
              dispatch(userSelectionDenied({verb: 'seoir', mood: 'conditionnel', person: null,missingMood:null,  missingTense: ['présent'], missingPerson: null, missingNumber: null, missingGender: null}))
              selectionApproved = false 
           }
        //verify messeoir conditions with conditionnel
        } else if (verbArray.includes('messeoir')){
          if (tenseArray.includes('présent') === false){
            dispatch(userSelectionDenied({verb: 'messeoir', mood: 'conditionnel', person: null,missingMood:null,  missingTense: ['présent'], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        } else if (tenseArray.includes('présent') === false && tenseArray.includes('passé') === false){
          dispatch(userSelectionDenied({verb: null, mood: 'conditionnel', person: null,missingMood:null,  missingTense: ['présent','passé'], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
      }

      //VERIFY CONDITIONS FOR 3rd PERSON GENDER
      if ((moodArray.includes('conditionnel') === true || moodArray.includes('subjonctif') === true || moodArray.includes('indicatif') === true) && (personArray.includes('3ème') === true && genderArray.includes('féminin') === false && (genderArray.includes('masculin') === false))) {
        dispatch(userSelectionDenied({verb: null, mood: null, person: '3ème',missingMood:null,  missingTense: null, missingPerson: null, missingNumber: null, missingGender: ['féminin', 'masculin']}))
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
      <div className='shuffle'>
        <ButtonPrimary function={getStore} text={'Shuffle'}/>
      </div>
  )
}
