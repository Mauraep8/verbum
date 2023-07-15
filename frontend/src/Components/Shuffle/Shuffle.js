import React from 'react' 
import '../Answer/Answer.scss';
import { useDispatch } from "react-redux";
import { answerCleared, shuffleApproved, shuffleDenied, userSelectionDenied} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";
import { verbListUpdateAction } from '../../Store/exerciseSlice';
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import './Shuffle.scss'
import { conditional, feminin, firstPerson, futurAnterieur, futurSimple, imparfait, imperative, indicative, masculin, passe, passeAnterieur, passeCompose, passeSimple, plural, plusQueParfait, present, secondPerson, singular, subjunctive, thirdPerson } from '../../Utils/grammarTerms';


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
        if(personArray.includes(thirdPerson) === false) {
        dispatch(userSelectionDenied({verb: 'pleuvoir', mood: indicative, person: null, missingMood:null, missingTense: null , missingPerson: thirdPerson, missingNumber: null, missingGender: null}))
        selectionApproved = false
        } else if(genderArray.includes(masculin) === false) {
          dispatch(userSelectionDenied({verb: 'pleuvoir', mood: indicative, person: null, missingMood:null, missingTense: null , missingPerson: null, missingNumber: null, missingGender: masculin}))
          selectionApproved = false
        } else  if (moodArray.includes(indicative)===false && moodArray.includes(subjunctive)===false && moodArray.includes(conditional)===false){
          dispatch(userSelectionDenied({verb: 'pleuvoir', mood: null, person: null, missingMood: [indicative, subjunctive, conditional], missingTense: null , missingPerson:null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } else if (numberArray.includes(singular)===false){
          dispatch(userSelectionDenied({verb: 'pleuvoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:null, missingNumber: singular, missingGender: null}))
          selectionApproved = false
        }
      }

      //VERIFY CONDITIONS FOR FALLOIR #46 FOR 3RD PERSON
      if (verbArray.includes('falloir') === true) {
        if(personArray.includes(thirdPerson) === false) {
        dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood:null,  missingTense: null , missingPerson:thirdPerson, missingNumber: null, missingGender: null}))
        selectionApproved = false
        } else if (moodArray.includes(indicative)===false && moodArray.includes(subjunctive)===false && moodArray.includes(conditional)===false){
          dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood: [indicative, subjunctive, conditional], missingTense: null , missingPerson:null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } else if (numberArray.includes(singular)===false){
          dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:null, missingNumber: singular, missingGender: null}))
          selectionApproved = false
        }
      }

      //VERIFY CONDITIONS FOR SEOIR #50 FOR 3RD PERSON for all moods
      if (verbArray.includes('seoir') === true) {
        if(personArray.includes(thirdPerson) === false) {
        dispatch(userSelectionDenied({verb: 'seoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:thirdPerson, missingNumber: null, missingGender: null}))
        selectionApproved = false
        }
      }

      //VERIFY CONDITIONS FOR MESSEOIR #50 FOR 3RD PERSON for all moods
      if (verbArray.includes('messeoir') === true) {
        if(personArray.includes(thirdPerson) === false) {
        dispatch(userSelectionDenied({verb: 'messeoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:thirdPerson, missingNumber: null, missingGender: null}))
        selectionApproved = false
        }
      }

      // VERIFY CONDITIONS FOR INDICATIF
      if (moodArray.includes(indicative) === true) {

        //verify seoir conditions with indicatif
        if (verbArray.includes("seoir") === true) {
          if (
            tenseArray.includes(present) === false &&
            tenseArray.includes(imparfait) === false &&
            tenseArray.includes(futurSimple) === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "seoir",
                mood: indicative,
                person: null,
                missingMood:null, 
                missingTense: [present, imparfait, futurSimple],
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
            tenseArray.includes(present) === false &&
            tenseArray.includes(imparfait) === false &&
            tenseArray.includes(futurSimple) === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "messeoir",
                mood: indicative,
                person: null,
                missingMood:null, 
                missingTense: [present,imparfait,futurSimple],
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
            tenseArray.includes(present) === false &&
            tenseArray.includes(passeCompose) === false &&
            tenseArray.includes(imparfait) === false &&
            tenseArray.includes(plusQueParfait) === false &&
            tenseArray.includes(passeAnterieur) === false &&
            tenseArray.includes(futurSimple) === false &&
            tenseArray.includes(futurAnterieur) === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "traire",
                mood: indicative,
                person: null,
                missingMood:null, 
                missingTense: [              
                present,
                passeCompose,
                imparfait,
                plusQueParfait,
                passeAnterieur,
                futurSimple,
                futurAnterieur],
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
              tenseArray.includes(present) === false &&
              tenseArray.includes(passeCompose) === false &&
              tenseArray.includes(imparfait) === false &&
              tenseArray.includes(plusQueParfait) === false &&
              tenseArray.includes(passeAnterieur) === false &&
              tenseArray.includes(futurSimple) === false &&
              tenseArray.includes(futurAnterieur) === false
            ) {
              dispatch(
                userSelectionDenied({
                  verb: "absoudre",
                  mood: indicative,
                  person: null,
                  missingMood:null, 
                  missingTense: [              
                  present,
                  passeCompose,
                  imparfait,
                  plusQueParfait,
                  passeAnterieur,
                  futurSimple,
                  futurAnterieur],
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
            tenseArray.includes(present) === false &&
            tenseArray.includes(passeCompose) === false &&
            tenseArray.includes(plusQueParfait) === false &&
            tenseArray.includes(passeAnterieur) === false &&
            tenseArray.includes(futurSimple) === false &&
            tenseArray.includes(futurAnterieur) === false
          ) {
            dispatch(
              userSelectionDenied({
                verb: "clore",
                mood: indicative,
                person: null,
                missingMood:null, 
                missingTense: [
                  present,
                  passeCompose,
                  plusQueParfait,
                  passeAnterieur,
                  futurSimple,
                  futurAnterieur,
                ],
                missingPerson: null,
                missingNumber: null,
                missingGender: null,
              })
            );
            selectionApproved = false;
          }       

        } else if (
          tenseArray.includes(present) === false &&
          tenseArray.includes(passeCompose) === false &&
          tenseArray.includes(imparfait) === false &&
          tenseArray.includes(plusQueParfait) === false &&
          tenseArray.includes(passeSimple) === false &&
          tenseArray.includes(passeAnterieur) === false &&
          tenseArray.includes(futurSimple) === false &&
          tenseArray.includes(futurAnterieur) === false
        ) {
          dispatch(
            userSelectionDenied({
              verb: null,
              mood: indicative,
              person: null,
              missingMood:null, 
              missingTense: [
                present,
                passeCompose,
                imparfait,
                plusQueParfait,
                passeSimple,
                passeAnterieur,
                futurSimple,
                futurAnterieur,
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
      if (moodArray.includes(imperative) === true) {

        if(verbArray.includes('clore')===true){
          if (tenseArray.includes(present) === true && personArray.includes(secondPerson)===false){
            dispatch(userSelectionDenied({verb: 'clore', mood: imperative, person: null, missingMood:null, missingTense: null , missingPerson: [secondPerson], missingNumber: null, missingGender: null}))
            selectionApproved = false

          } else if (personArray.includes(secondPerson)=== true && numberArray.includes(singular)===false){
            dispatch(userSelectionDenied({verb: "clore", mood: imperative, person:secondPerson, missingMood:null,  missingTense: null, missingPerson: null, missingNumber: singular, missingGender: null}))
            selectionApproved = false
          }
        }

        if (tenseArray.includes(present) === false && tenseArray.includes(passe) === false){
            dispatch(userSelectionDenied({verb: null, mood: imperative, person: null, missingMood:null, missingTense: [present,passe], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false
          }

          if(personArray.includes(firstPerson) === true && numberArray.includes(plural) === false){
            dispatch(userSelectionDenied({verb: null, mood: imperative, person: firstPerson, missingMood:null,  missingTense: null , missingPerson: null, missingNumber:plural, missingGender: null}))
            selectionApproved = false
          }
          if(personArray.includes(firstPerson) === false && personArray.includes(secondPerson) === false){
            dispatch(userSelectionDenied({verb: null, mood: imperative, person: null, missingMood:null, missingTense: null , missingPerson: [firstPerson,secondPerson], missingNumber: null, missingGender: null}))
            selectionApproved = false
            }
        
      }
    

      // VERIFY CONDITIONS FOR SUBJONCTIF
      if (moodArray.includes(subjunctive) === true) {

        //verify seoir conditions with subjonctif
        if (verbArray.includes('seoir')){
          if (tenseArray.includes(present) === false){
              dispatch(userSelectionDenied({verb: 'seoir', mood: subjunctive, person: null,missingMood:null,  missingTense: [present], missingPerson: null, missingNumber: null, missingGender: null}))
              selectionApproved = false 
           }
        //verify messeoir conditions with subjonctif
        } else if (verbArray.includes('messeoir')){
          if (tenseArray.includes(present) === false){
            dispatch(userSelectionDenied({verb: 'messeoir', mood: subjunctive, person: null, missingMood:null, missingTense: [present], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        
        //verify traire conditions with subjonctif
        } else if (verbArray.includes('traire')){
          if (tenseArray.includes(present) === false  && tenseArray.includes(passe) === false && tenseArray.includes(plusQueParfait) === false ){
            dispatch(userSelectionDenied({verb: 'traire', mood: subjunctive, person: null, missingMood:null, missingTense: [present, passe, plusQueParfait], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        //verify traire conditions with subjonctif
        } else if (verbArray.includes('absoudre')){
          if (tenseArray.includes(present) === false  && tenseArray.includes(passe) === false && tenseArray.includes(plusQueParfait) === false ){
            dispatch(userSelectionDenied({verb: 'absoudre', mood:subjunctive, person: null, missingMood:null,  missingTense: [present,passe,plusQueParfait], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        // verify clore conditions with subjonctif
        }  else if (verbArray.includes('clore')){
          if (tenseArray.includes(present) === false  && tenseArray.includes(passe) === false && tenseArray.includes(plusQueParfait) === false ){
            dispatch(userSelectionDenied({verb: 'clore', mood: subjunctive, person: null, missingMood:null, missingTense: [present,passe,plusQueParfait], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        
        } else if (tenseArray.includes(present) === false && tenseArray.includes(passe) === false && tenseArray.includes(imparfait) === false && tenseArray.includes(plusQueParfait) === false ){
          dispatch(userSelectionDenied({verb: null, mood:subjunctive, person: null, missingMood:null, missingTense: [present,passe,imparfait,plusQueParfait], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
      }

      // VERIFY CONDITIONS FOR CONDITIONNEL
      if (moodArray.includes(conditional) === true) {
      
        //verify seoir conditions with conditionnel
        if (verbArray.includes('seoir')){
          if (tenseArray.includes(present) === false){
              dispatch(userSelectionDenied({verb: 'seoir', mood: conditional, person: null,missingMood:null,  missingTense: [present], missingPerson: null, missingNumber: null, missingGender: null}))
              selectionApproved = false 
           }
        //verify messeoir conditions with conditionnel
        } else if (verbArray.includes('messeoir')){
          if (tenseArray.includes(present) === false){
            dispatch(userSelectionDenied({verb: 'messeoir', mood: conditional, person: null,missingMood:null,  missingTense: [present], missingPerson: null, missingNumber: null, missingGender: null}))
            selectionApproved = false 
          }
        } else if (tenseArray.includes(present) === false && tenseArray.includes(passe) === false){
          dispatch(userSelectionDenied({verb: null, mood: conditional, person: null,missingMood:null,  missingTense: [present,passe], missingPerson: null, missingNumber: null, missingGender: null}))
          selectionApproved = false
        } 
      }

      //VERIFY CONDITIONS FOR 3rd PERSON GENDER
      if ((moodArray.includes(conditional) === true || moodArray.includes(subjunctive) === true || moodArray.includes(indicative) === true) && (personArray.includes(thirdPerson) === true && genderArray.includes(feminin) === false && (genderArray.includes(masculin) === false))) {
        dispatch(userSelectionDenied({verb: null, mood: null, person: thirdPerson, missingMood:null,  missingTense: null, missingPerson: null, missingNumber: null, missingGender: [feminin, masculin]}))
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
