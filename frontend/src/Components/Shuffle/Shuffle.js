import React from "react";
import "../Answer/Answer.scss";
import { useDispatch } from "react-redux";
import {
  answerCleared,
  shuffleApproved,
  shuffleDenied,
  userSelectionDenied,
} from "../../Store/exerciseSlice";
import { store } from "../../Store/configureStore";
import { verbListUpdateAction } from "../../Store/exerciseSlice";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./Shuffle.scss";
import {
  conditional,
  feminin,
  firstPerson,
  futurAnterieur,
  futurSimple,
  imparfait,
  imperative,
  indicative,
  masculin,
  passe,
  passeAnterieur,
  passeCompose,
  passeSimple,
  plural,
  plusQueParfait,
  present,
  secondPerson,
  singular,
  subjunctive,
  thirdPerson,
} from "../../Utils/grammarTerms";

export default function Shuffle() {
  const dispatch = useDispatch();

  const getStore = () => {
    // after verblist is updated, must falsify action, to allow shuffling to occur
    dispatch(verbListUpdateAction(false));

    //clear previous answers
    dispatch(answerCleared([]));

    // STATE OF STORE AND TURN INTO ARRAY
    const storeState = store.getState().exercise;

    const asArray = Object.entries(storeState);

    const filteredArray = asArray.filter(([key]) => key.includes("Checked"));

    // STATUS OF DROPMENUS, ONLY WHEN LOOP REMAINS TRUE DOES LOOP CONTINUE AND EVENTUALLY TRIGGER SHUFFLE
    let allDropmenuChecked = true;

    // IF ONE DROPMENUS NOT CHECKED THEN SHUFFLE DENIED
    const verifyDropmenuStatus = () => {
      for (let i = 0; i < filteredArray.length; i++) {
        const element = filteredArray[i];
        if (allDropmenuChecked === true) {
          if (element[1].length === 0) {
            dispatch(shuffleDenied(element[0]));

            allDropmenuChecked = false;
          }
        }
      }
    };
    verifyDropmenuStatus();

    let selectionApproved = true;

    const verifyUserSelection = () => {
      const verbArray = storeState.verbArrayChecked.map(({value, verbID}) => ({value, verbID}))
      const moodArray = storeState.moodArrayChecked.map((element) => element.value);
      const tenseArray = storeState.tenseArrayChecked.map((element) => element.value);
      const personArray = storeState.personArrayChecked.map((element) => element.value);
      const numberArray = storeState.numberArrayChecked.map((element) => element.value);
      const genderArray = storeState.genderArrayChecked.map((element) => element.value);

      //VERIFY CONDITIONS FOR VERB PLEUVOIR #75 = 3rd person + masc gender + never in IMPERATIF

      if (verbArray.some((verb) => verb.verbID === 75)) {
        const filteredVerb = verbArray.filter((verb) => verb.verbID === 75)
        if(personArray.includes(thirdPerson) === false) {
          dispatch(userSelectionDenied({
            element: 'verb ' + filteredVerb[0].value,
            missingType: "person",
            missing: [
              thirdPerson
            ],
          }))
          selectionApproved = false
        }
        if(genderArray.includes(masculin) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "gender",
              missing: [
                masculin
              ],
          }))
          selectionApproved = false        
        } 
        if(moodArray.includes(indicative) === false && moodArray.includes(subjunctive) === false && moodArray.includes(conditional) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "mood",
              missing: [
                indicative,
                subjunctive,
                conditional
              ],
          }))
          selectionApproved = false        
        } 
      }
      
      //VERIFY CONDITIONS FOR FALLOIR #66 = 3rd person + singular + never in IMPERATIF

     if (verbArray.some((verb) => verb.verbID === 66)) {
      const filteredVerb = verbArray.filter((verb) => verb.verbID === 66)
        if(personArray.includes(thirdPerson) === false) {
          dispatch(userSelectionDenied({
            element: 'verb ' + filteredVerb[0].value,
            missingType: "person",
            missing: [
              thirdPerson
            ],
          }))
          selectionApproved = false
        }
        if(numberArray.includes(singular) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "number",
              missing: [
                singular
              ],
          }))
          selectionApproved = false        
        }
        if(moodArray.includes(indicative) === false && moodArray.includes(subjunctive) === false && moodArray.includes(conditional) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "mood",
              missing: [
                indicative,
                subjunctive,
                conditional
              ],
          }))
          selectionApproved = false        
        } 
     }
        
      //VERIFY CONDITIONS FOR SEOIR #79 = never imperatif mood, indicative (only present, imparfait, futur), subjunctive and conditional (only present)
      // 3rd person only

      if (verbArray.some((verb) => verb.verbID === 79)) {
        const filteredVerb = verbArray.filter((verb) => verb.verbID === 79)

        //verify mood
        if(moodArray.includes(indicative) === false && moodArray.includes(subjunctive) === false && moodArray.includes(conditional) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "mood",
              missing: [
                indicative,
                subjunctive,
                conditional
              ],
          }))
          selectionApproved = false        
        } 
        //verify indicative tenses
        if (moodArray.includes(indicative)){ 
          if(tenseArray.includes(present) === false && tenseArray.includes(imparfait) === false && tenseArray.includes(futurSimple) === false) {
            dispatch(userSelectionDenied({
              element: ['verb ' + filteredVerb[0].value, indicative], 
              missingType: "tense",
              missing: [
                present,
                imparfait,
                futurSimple
              ],
            }))
            selectionApproved = false        
          } 
        }
        //verify subjunctive tenses
        if (moodArray.includes(subjunctive)){ 
          if(tenseArray.includes(present) === false) {
            dispatch(userSelectionDenied({
              element: ['verb ' + filteredVerb[0].value, subjunctive], 
              missingType: "tense",
              missing: [
                present,
              ],
            }))
            selectionApproved = false        
          } 
        }
        //verify conditional tenses
        if (moodArray.includes(conditional)){ 
          if(tenseArray.includes(present) === false) {
            dispatch(userSelectionDenied({
              element: ['verb ' + filteredVerb[0].value, conditional], 
              missingType: "tense",
              missing: [
                present,
              ],
            }))
            selectionApproved = false        
          } 
        }    
        //verify 3rd person  
        if(personArray.includes(thirdPerson) === false) {
          dispatch(userSelectionDenied({
            element: 'verb ' + filteredVerb[0].value,
            missingType: "person",
            missing: [
              thirdPerson
            ],
          }))
          selectionApproved = false
        }
      }

      // VERIFY CONDITIONS FOR INDICATIF
      if (moodArray.includes(indicative) === true) {
        if (
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
              element: indicative,
              missingType: "tense",
              missing: [
                present,
                passeCompose,
                imparfait,
                plusQueParfait,
                passeSimple,
                passeAnterieur,
                futurSimple,
                futurAnterieur,
              ],
            })
          );
          selectionApproved = false;
        }
      }

      // VERIFY CONDITIONS FOR IMPERATIF
      if (moodArray.includes(imperative) === true) {
        if (
          tenseArray.includes(present) === false &&
          tenseArray.includes(passe) === false
        ) {
          dispatch(
            userSelectionDenied({
              element: imperative,
              missingType: 'tense',
              missing: [present, passe],
            })
          );
          selectionApproved = false;
        }

        if (
          personArray.includes(firstPerson) === true &&
          numberArray.includes(plural) === false
        ) {
          dispatch(
            userSelectionDenied({
              element: [imperative, 'first person'],
              missingType: "elements",
              missing: [plural],
            })
          );
          selectionApproved = false;
        }
        if (
          personArray.includes(firstPerson) === false &&
          personArray.includes(secondPerson) === false
        ) {
          dispatch(
            userSelectionDenied({
              element: imperative,
              missingType: 'person',
              missing: [firstPerson, secondPerson],
            })
          );
          selectionApproved = false;
        }
      }

      // VERIFY CONDITIONS FOR SUBJONCTIF
      if (moodArray.includes(subjunctive) === true) {
        if (
          tenseArray.includes(present) === false &&
          tenseArray.includes(passe) === false &&
          tenseArray.includes(imparfait) === false &&
          tenseArray.includes(plusQueParfait) === false
        ) {
          dispatch(
            userSelectionDenied({
              element: subjunctive,
              missingType: 'tense',
              missing: [present, passe, imparfait, plusQueParfait],
            })
          );
          selectionApproved = false;
        }
      }

      // VERIFY CONDITIONS FOR CONDITIONNEL
      if (moodArray.includes(conditional) === true) {
        if (
          tenseArray.includes(present) === false &&
          tenseArray.includes(passe) === false
        ) {
          dispatch(
            userSelectionDenied({
              element: conditional,
              missingType: 'tense',
              missing: [present, passe],
 
            })
          );
          selectionApproved = false;
        }
      }
    };
    
    verifyUserSelection();

    if (
      storeState.messageState.length === 0 &&
      storeState.userSelectionMessage.length === 0
    ) {
      if (allDropmenuChecked === true && selectionApproved === true) {
        dispatch(shuffleApproved(store.getState().exercise));
      }
    }

    allDropmenuChecked = null;
  };

  return (
    <div className="shuffle">
      <ButtonPrimary function={getStore} text={"Shuffle"} />
    </div>
  );
}
