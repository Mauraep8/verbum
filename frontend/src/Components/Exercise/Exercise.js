import React, { useEffect } from "react";
import Answer from "../Answer/Answer";
import PopupMessage from "../PopupMessage/PopupMessage";
import {
  personArray,
  genderArray,
  numberArray,
  tenseArray,
  moodArray,
} from "../../Utils/GrammarArrayValue";
import { useSelector, useDispatch } from "react-redux";
import "./Exercise.scss";
import Shuffle from "../Shuffle/Shuffle";
import { shuffleArray } from "../../Utils/shuffleArray";
import {
  genderShuffled,
  moodShuffled,
  personShuffled,
  tenseShuffled,
  numberShuffled,
  verbShuffled,
  answerCompared,
} from "../../Store/exerciseSlice";
import GrammarFeature from "../GrammarFeature/GrammarFeature";
import {
  imperative,
  present,
  thirdPerson,
  secondPerson,
  firstPerson,
  plural,
  singular,
  masculin,
  indicative,
  subjunctive,
  conditional,
} from "../../Utils/grammarTerms";
import shuffleVerb from "../../Utils/grammarLogic/shuffleVerb";
import shuffleMood from "../../Utils/grammarLogic/shuffleMood";
import shufflePerson from "../../Utils/grammarLogic/shufflePerson";
import shuffleIndicativeTenses from "../../Utils/grammarLogic/indicative/shuffleIndicativeTenses";
import shuffleImperativeTenses from "../../Utils/grammarLogic/imperative/shuffleImperativeTenses";
import shuffleSubjunctiveTenses from "../../Utils/grammarLogic/subjunctive/shuffleSubjunctiveTenses";
import shuffleConditionalTenses from "../../Utils/grammarLogic/conditional/shuffleConditionalTenses";

export default function Exercise() {
  const verbListState = useSelector((state) => state.exercise.verbListState);
  const shuffleAction = useSelector((state) => state.exercise.shuffleAction);
  const shuffleState = useSelector((state) => state.exercise.shuffleState);
  const messageState = useSelector((state) => state.exercise.messageState);
  const messageWarning = useSelector(
    (state) => state.exercise.userSelectionMessage
  );
  const moodState = useSelector((state) => state.exercise.moodState);
  const tenseState = useSelector((state) => state.exercise.tenseState);
  const personState = useSelector((state) => state.exercise.personState);
  const numberState = useSelector((state) => state.exercise.numberState);
  const genderState = useSelector((state) => state.exercise.genderState);
  const verbState = useSelector((state) => state.exercise.verbState);
  const userAnswer = useSelector((state) => state.exercise.userAnswerState);
  const apiAnswer = useSelector((state) => state.exercise.apiAnswerState);
  const resultAnswer = useSelector((state) => state.exercise.resultAnswerState);
  const dispatch = useDispatch();

  useEffect(() => {
    // AT INITIAL RENDER SHUFFLESTATE = [], BEFORE SHUFFLE CLICKED
    // ONLY RUN WHEN SHUFFLE ACTION IS APPROVED
    if (shuffleState.length !== 0 || shuffleAction === true) {

      // VERB SHUFFLE
      const verbResult = shuffleVerb(shuffleState);
      dispatch(verbShuffled(verbResult));

      // MOOD SHUFFLE
      const moodResult = shuffleMood(shuffleState, verbResult);
      dispatch(moodShuffled(moodResult));

      // TENSE SHUFFLE
      function shuffleTense() {
        // if indicative
        if (moodResult.result.value === indicative) {
          const indicativeTenseResult = shuffleIndicativeTenses(shuffleState,verbResult);
          dispatch(tenseShuffled(indicativeTenseResult));
          return indicativeTenseResult;
        }

        // if imperative
        if (moodResult.result.value === imperative) {
          const imperativeTenseResult = shuffleImperativeTenses(shuffleState, verbResult);
          dispatch(tenseShuffled(imperativeTenseResult));
          return imperativeTenseResult;
        }

        // if subjunctive
        if (moodResult.result.value === subjunctive) {
          const subjunctiveTenseResult = shuffleSubjunctiveTenses(shuffleState,verbResult);
          dispatch(tenseShuffled(subjunctiveTenseResult));
          return subjunctiveTenseResult;
        }

        // if conditional
        if (moodResult.result.value === conditional) {
          const conditionalTenseResult = shuffleConditionalTenses(shuffleState,verbResult);
          dispatch(tenseShuffled(conditionalTenseResult));
          return conditionalTenseResult;
        }
      }
      const tenseResult = shuffleTense();

      //PERSON SHUFFLE
      // const shufflePerson = () => {
      //   //verbs #45 pleuvoir #46 falloir, 50# seoir and messeoir only in 3rd person
      //   if (
      //     verbResult.result.verbID === 45 ||
      //     verbResult.result.verbID === 46 ||
      //     verbResult.result.verbID === 50
      //   ) {
      //     const filteredPerson = shuffleState.personArrayChecked.filter(
      //       (obj) => obj.value === thirdPerson
      //     );
      //     const shuffledPerson = shuffleArray(filteredPerson);
      //     dispatch(personShuffled(shuffledPerson));
      //     return shuffledPerson;
      //   } else {
      //     // if imperatif
      //     if (moodResult.result.value === imperative) {
      //       // clore imperatif present
      //       if (
      //         verbResult.result.verbID === 70 &&
      //         tenseResult.result.value === present
      //       ) {
      //         const filteredPerson = shuffleState.personArrayChecked.filter(
      //           (obj) => obj.value === secondPerson
      //         );
      //         const shuffledPerson = shuffleArray(filteredPerson);
      //         dispatch(personShuffled(shuffledPerson));
      //         return shuffledPerson;
      //       } else {
      //         const filteredPerson = shuffleState.personArrayChecked.filter(
      //           (obj) => obj.value !== thirdPerson
      //         );
      //         const shuffledPerson = shuffleArray(filteredPerson);
      //         dispatch(personShuffled(shuffledPerson));
      //         return shuffledPerson;
      //       }
      //       // all other moods
      //     } else {
      //       const shuffledPerson = shuffleArray(
      //         shuffleState.personArrayChecked
      //       );
      //       dispatch(personShuffled(shuffledPerson));
      //       return shuffledPerson;
      //     }
      //   }
      // };
      const personResult = shufflePerson(shuffleState, verbResult, moodResult, tenseResult);
      dispatch(personShuffled(personResult));

      //SHUFFLE NUMBER
      const shuffleNumber = () => {
        // if mood imperatif and if person is 1
        if (
          moodResult.result.value === imperative &&
          personResult.result.value === firstPerson
        ) {
          const filteredNumber = shuffleState.numberArrayChecked.filter(
            (obj) => obj.value === plural
          );
          const shuffledNumber = shuffleArray(filteredNumber);
          dispatch(numberShuffled(shuffledNumber));
          return shuffledNumber;

          // clore imperatif present only in singulier
        } else if (
          verbResult.result.verbID === 70 &&
          moodResult.result.value === imperative &&
          tenseResult.result.value === present
        ) {
          const filteredNumber = shuffleState.numberArrayChecked.filter(
            (obj) => obj.value === singular
          );
          const shuffledNumber = shuffleArray(filteredNumber);
          dispatch(numberShuffled(shuffledNumber));
          return shuffledNumber;

          // pleuvoir and falloir only in singulier
        } else if (
          verbResult.result.verbID === 45 ||
          verbResult.result.verbID === 46
        ) {
          const filteredNumber = shuffleState.numberArrayChecked.filter(
            (obj) => obj.value === singular
          );
          const shuffledNumber = shuffleArray(filteredNumber);
          dispatch(numberShuffled(shuffledNumber));
          return shuffledNumber;
          // all other moods and persons and verbs
        } else {
          const shuffledNumber = shuffleArray(shuffleState.numberArrayChecked);
          dispatch(numberShuffled(shuffledNumber));
          return shuffledNumber;
        }
      };
      const numberResult = shuffleNumber();

      const shuffleGender = () => {
        // if verb is pleuvoir id 45

        if (verbResult.result.verbID === 45) {
          const filteredGender = shuffleState.genderArrayChecked.filter(
            (obj) => obj.value === masculin
          );
          const shuffledGender = shuffleArray(filteredGender);
          dispatch(genderShuffled(shuffledGender));
        } else {
          const shuffledGender = shuffleArray(shuffleState.genderArrayChecked);
          dispatch(genderShuffled(shuffledGender));
          return shuffledGender;
        }
      };
      const genderResult = shuffleGender();
    }
  }, [shuffleState]);

  useEffect(() => {
    if (userAnswer.length !== 0 && apiAnswer.length !== 0) {
      const compareAnswer = () => {
        if (typeof userAnswer === "string" && typeof apiAnswer === "string") {
          if (userAnswer === apiAnswer) {
            return { user: true, answer: userAnswer };
          } else {
            return { user: false, answer: apiAnswer };
          }
        }
      };
      const result = compareAnswer(userAnswer, apiAnswer);
      dispatch(answerCompared(result));
    }
  }, [userAnswer, apiAnswer]);

  return (
    <div className="exercise">
      <div className="exercise__main-container">
        <PopupMessage
          messageError={messageState}
          messageWarning={messageWarning}
        />
        <h2 className="exercise__header">Exercise</h2>
        <p className="exercise__text">
          Customize, shuffle and answer the conjugation exercise.
        </p>
        <div className="exercise__wrapper">
          <div className="exercise__container">
            <GrammarFeature
              shuffleState={personState}
              option={personArray}
              type="person"
            />
            <GrammarFeature
              shuffleState={genderState}
              option={genderArray}
              type="gender"
            />
            <GrammarFeature
              shuffleState={numberState}
              option={numberArray}
              type="number"
            />
            <GrammarFeature
              shuffleState={tenseState}
              option={tenseArray}
              type="tense"
            />
            <GrammarFeature
              shuffleState={moodState}
              option={moodArray}
              type="mood"
            />
            <GrammarFeature
              shuffleState={verbState}
              option={verbListState}
              type="verb"
            />
          </div>
          <div className="exercise__answer-container">
            <Answer answer={resultAnswer} />
            <Shuffle />
          </div>
        </div>
      </div>
    </div>
  );
}
