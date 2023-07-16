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
      const verbArray = storeState.verbArrayChecked.map((element) => element.value);
      const moodArray = storeState.moodArrayChecked.map(
        (element) => element.value
      );
      const tenseArray = storeState.tenseArrayChecked.map(
        (element) => element.value
      );
      const personArray = storeState.personArrayChecked.map(
        (element) => element.value
      );
      const numberArray = storeState.numberArrayChecked.map(
        (element) => element.value
      );
      const genderArray = storeState.genderArrayChecked.map(
        (element) => element.value
      );

      //VERIFY CONDITIONS FOR VERB PLEUVOIR #45 AND FALLOIR #46 FOR 3RD PERSON AND FOR MASC GENDER
      // if (verbArray.includes('pleuvoir') === true) {
      //   if(personArray.includes(thirdPerson) === false) {
      //   dispatch(userSelectionDenied({verb: 'pleuvoir', mood: indicative, person: null, missingMood:null, missingTense: null , missingPerson: thirdPerson, missingNumber: null, missingGender: null}))
      //   selectionApproved = false
      //   } else if(genderArray.includes(masculin) === false) {
      //     dispatch(userSelectionDenied({verb: 'pleuvoir', mood: indicative, person: null, missingMood:null, missingTense: null , missingPerson: null, missingNumber: null, missingGender: masculin}))
      //     selectionApproved = false
      //   } else  if (moodArray.includes(indicative)===false && moodArray.includes(subjunctive)===false && moodArray.includes(conditional)===false){
      //     dispatch(userSelectionDenied({verb: 'pleuvoir', mood: null, person: null, missingMood: [indicative, subjunctive, conditional], missingTense: null , missingPerson:null, missingNumber: null, missingGender: null}))
      //     selectionApproved = false
      //   } else if (numberArray.includes(singular)===false){
      //     dispatch(userSelectionDenied({verb: 'pleuvoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:null, missingNumber: singular, missingGender: null}))
      //     selectionApproved = false
      //   }
      // }

      //VERIFY CONDITIONS FOR FALLOIR #46 FOR 3RD PERSON
      // if (verbArray.includes('falloir') === true) {
      //   if(personArray.includes(thirdPerson) === false) {
      //   dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood:null,  missingTense: null , missingPerson:thirdPerson, missingNumber: null, missingGender: null}))
      //   selectionApproved = false
      //   } else if (moodArray.includes(indicative)===false && moodArray.includes(subjunctive)===false && moodArray.includes(conditional)===false){
      //     dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood: [indicative, subjunctive, conditional], missingTense: null , missingPerson:null, missingNumber: null, missingGender: null}))
      //     selectionApproved = false
      //   } else if (numberArray.includes(singular)===false){
      //     dispatch(userSelectionDenied({verb: 'falloir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:null, missingNumber: singular, missingGender: null}))
      //     selectionApproved = false
      //   }
      // }

      //VERIFY CONDITIONS FOR SEOIR #50 FOR 3RD PERSON for all moods
      // if (verbArray.includes('seoir') === true) {
      //   if(personArray.includes(thirdPerson) === false) {
      //   dispatch(userSelectionDenied({verb: 'seoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:thirdPerson, missingNumber: null, missingGender: null}))
      //   selectionApproved = false
      //   }
      // }

      //VERIFY CONDITIONS FOR MESSEOIR #50 FOR 3RD PERSON for all moods
      // if (verbArray.includes('messeoir') === true) {
      //   if(personArray.includes(thirdPerson) === false) {
      //   dispatch(userSelectionDenied({verb: 'messeoir', mood: null, person: null, missingMood:null, missingTense: null , missingPerson:thirdPerson, missingNumber: null, missingGender: null}))
      //   selectionApproved = false
      //   }
      // }

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
