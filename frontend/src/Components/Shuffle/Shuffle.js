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
  imperative,
  indicative,
  subjunctive,
} from "../../Utils/grammarTerms";
import pleuvoirConditions from "../../Utils/verbLogic/pleuvoirConditions";
import falloirConditions from "../../Utils/verbLogic/falloirConditions";
import seoirConditions from "../../Utils/verbLogic/seoirConditions";
import indicativeConditions from "../../Utils/grammarLogic/indicative/indicativeConditions";
import imperativeConditions from "../../Utils/grammarLogic/imperative/imperativeConditions";
import subjunctiveConditions from "../../Utils/grammarLogic/subjunctive/subjunctiveConditions";
import conditionalConditions from "../../Utils/grammarLogic/conditional/conditionalConditions";
import faseyerConditions from "../../Utils/verbLogic/faseyerConditions";
import pouvoirConditions from "../../Utils/verbLogic/pouvoirConditions";
import choirConditions from "../../Utils/verbLogic/choirConditions";
import echoirConditions from "../../Utils/verbLogic/echoirConditions";
import dechoirConditions from "../../Utils/verbLogic/dechoirConditions";
import absoudreConditions from "../../Utils/verbLogic/absoudreConditions";
import frireConditions from "../../Utils/verbLogic/frireConditions";
import cloreConditions from "../../Utils/verbLogic/cloreConditions";
import traireConditions from "../../Utils/verbLogic/traireConditions";
import paitreConditions from "../../Utils/verbLogic/paitreConditions";
import faillirConditions from "../../Utils/verbLogic/faillirConditions";


export default function Shuffle() {

  const dispatch = useDispatch();

  const getStore = (e) => {

    // stop refreshing page when button clicked
    e.preventDefault()

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

      //VERB CONDITIONS

      // 75 PLEUVOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 75)){
        const pleuvoirVerified = pleuvoirConditions(verbArray,moodArray,genderArray,personArray)
        if (pleuvoirVerified !== null){
          dispatch(userSelectionDenied(pleuvoirVerified))
          selectionApproved = false
        }
      }

      // 66 FALLOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 66)) {
        const falloirVerified = falloirConditions(verbArray,moodArray,numberArray,personArray)
        if (falloirVerified !== null){
          dispatch(userSelectionDenied(falloirVerified))
          selectionApproved = false
        }
      }
      
      // 79 SEOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 79)) {
        const seoirVerified = seoirConditions(verbArray,moodArray,tenseArray,personArray)
        if (seoirVerified !== null){
          dispatch(userSelectionDenied(seoirVerified))
          selectionApproved = false
        }
      }

      // 30 FASEYER CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 30)) {
        const faseyerVerified = faseyerConditions(verbArray,moodArray,personArray)
        if (faseyerVerified !== null){
          dispatch(userSelectionDenied(faseyerVerified))
          selectionApproved = false
        }
      }
      
      // 78 POUVOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 78)) {
        const pouvoirVerified = pouvoirConditions(verbArray,moodArray)
        if (pouvoirVerified !== null){
          dispatch(userSelectionDenied(pouvoirVerified))
          selectionApproved = false
        }
      }

      // 82 CHOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 82)) {
        const choirVerified = choirConditions(verbArray,moodArray,tenseArray,numberArray,personArray)
        if (choirVerified !== null){
          dispatch(userSelectionDenied(choirVerified))
          selectionApproved = false
        }
      }

      // 83 ECHOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 83)) {
        const echoirVerified = echoirConditions(verbArray,moodArray,personArray)
        if (echoirVerified !== null){
          dispatch(userSelectionDenied(echoirVerified))
          selectionApproved = false
        }
      }
      // 84 DECHOIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 84)) {
        const dechoirVerified = dechoirConditions(verbArray,moodArray,tenseArray)
        if (dechoirVerified !== null){
          dispatch(userSelectionDenied(dechoirVerified))
          selectionApproved = false
        }
      }

      // 92 ABSOUDRE CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 92)) {
        const absoudreVerified = absoudreConditions(verbArray,moodArray,tenseArray)
        if (absoudreVerified !== null){
          dispatch(userSelectionDenied(absoudreVerified))
          selectionApproved = false
        }
      }

      //108 FRIRE CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 108)) {
        const frireVerified = frireConditions(verbArray,moodArray,tenseArray,personArray,numberArray)
        if (frireVerified !== null){
          dispatch(userSelectionDenied(frireVerified))
          selectionApproved = false
        }
      }

      // 112 CLORE CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 112)) {
        const cloreVerified = cloreConditions(verbArray,moodArray,tenseArray,personArray,numberArray)
        if (cloreVerified !== null){
          dispatch(userSelectionDenied(cloreVerified))
          selectionApproved = false
        }
      }
      
      // 121 TRAIRE CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 121)) {
        const traireVerified = traireConditions(verbArray,moodArray,tenseArray)
        if (traireVerified !== null){
          dispatch(userSelectionDenied(traireVerified))
          selectionApproved = false
        }
      }

      // 127 PAITRE CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 127)) {
        const paitreVerified = paitreConditions(verbArray,moodArray,tenseArray)
        if (paitreVerified !== null){
          dispatch(userSelectionDenied(paitreVerified))
          selectionApproved = false
        }
      }

      // 59 FAILLIR CONDITIONS VERIFICATION
      if (verbArray.some((verb) => verb.verbID === 59)) {
        const faillirVerified = faillirConditions(verbArray,moodArray)
        if (faillirVerified !== null){
          dispatch(userSelectionDenied(faillirVerified))
          selectionApproved = false
        }
      }

      //GRAMMAR CONDITIONS

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
        const imperativeVerified = imperativeConditions(tenseArray,numberArray,personArray)
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
    <div>
      <ButtonPrimary function={getStore} text={"Shuffle"} />
    </div>
  );
}
