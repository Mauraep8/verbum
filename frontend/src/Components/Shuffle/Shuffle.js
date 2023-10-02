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
import pleuvoirConditions from "../../Utils/verbLogic/pleuvoirConditions";
import falloirConditions from "../../Utils/verbLogic/falloirConditions";
import seoirConditions from "../../Utils/verbLogic/seoirConditions";
import indicativeConditions from "../../Utils/grammarLogic/indicativeConditions";
import imperativeConditions from "../../Utils/grammarLogic/imperativeConditions";
import subjunctiveConditions from "../../Utils/grammarLogic/subjunctiveConditions";
import conditionalConditions from "../../Utils/grammarLogic/conditionalConditions";




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

      // PLEUVOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 75)){
        const pleuvoirVerified = pleuvoirConditions(verbArray,moodArray,genderArray,personArray,)
        if (pleuvoirVerified !== null){
          dispatch(userSelectionDenied(pleuvoirVerified))
          selectionApproved = false
        }
      }

      // FALLOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 66)) {
        const falloirVerified = falloirConditions(verbArray,moodArray,numberArray,personArray)
        if (falloirVerified !== null){
          dispatch(userSelectionDenied(falloirVerified))
          selectionApproved = false
        }
      }
      
      //SEOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 79)) {
        const seoirVerified = seoirConditions(verbArray,moodArray,tenseArray,personArray)
        if (seoirVerified !== null){
          dispatch(userSelectionDenied(seoirVerified))
          selectionApproved = false
        }
      }

      // INDICATIVE CONDITIONS VERIFICATION
      if(moodArray.includes(indicative)=== true){
        const indicativeVerified = indicativeConditions(tenseArray)
        if (indicativeVerified !== null){
          dispatch(userSelectionDenied(indicativeVerified))
          selectionApproved = false
        }
      }

      // IMPERATIVE CONDITIONS VERIFICATION
      if (moodArray.includes(imperative) === true) {
        const imperativeVerified = imperativeConditions(tenseArray,numberArray,genderArray)
        if(imperativeVerified !== null){
          dispatch(userSelectionDenied(imperativeVerified))
          selectionApproved = false
        }
      }

      // SUBJUNCTIVE CONDITIONS VERIFICATION
      if (moodArray.includes(subjunctive) === true) {
        const subjunctiveVerified = subjunctiveConditions(tenseArray)
        if(subjunctiveVerified !== null){
          dispatch(userSelectionDenied(subjunctiveVerified))
          selectionApproved = false
        }
      }

      // CONDITIONAL CONDITIONS VERIFICATION
      if (moodArray.includes(conditional) === true) {
        const conditionalVerified = conditionalConditions(tenseArray)
        if(conditionalVerified !== null){
          dispatch(userSelectionDenied(conditionalVerified))
          selectionApproved = false
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
