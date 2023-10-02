import { store } from "../../Store/configureStore";
import React from "react";
import { useDispatch } from "react-redux";
import {
    answerCleared,
    shuffleApproved,
    shuffleDenied,
    userSelectionDenied,
  } from "../../Store/exerciseSlice";

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
  } from "../grammarTerms";

  
// STATE OF STORE AND TURN INTO ARRAY
const storeState = store.getState().exercise;
const dispatch = useDispatch();


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
          let selectionApproved = false
        }
        if(genderArray.includes(masculin) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "gender",
              missing: [
                masculin
              ],
          }))
          let selectionApproved = false        
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
          let selectionApproved = false        
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
          let selectionApproved = false
        }
        if(numberArray.includes(singular) === false) {
          dispatch(userSelectionDenied({
              element: 'verb ' + filteredVerb[0].value,
              missingType: "number",
              missing: [
                singular
              ],
          }))
          let selectionApproved = false        
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
          let selectionApproved = false        
        } 
     }