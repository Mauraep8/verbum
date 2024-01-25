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
  indicative,
  subjunctive,
  conditional,
} from "../../Utils/grammarTerms";
import shuffleVerb from "../../Utils/grammarLogic/shuffleVerb";
import shuffleMood from "../../Utils/grammarLogic/shuffleMood";
import shufflePerson from "../../Utils/grammarLogic/shufflePerson";
import shuffleNumber from "../../Utils/grammarLogic/shuffleNumber";
import shuffleGender from "../../Utils/grammarLogic/shuffleGender";
import shuffleIndicativeTenses from "../../Utils/grammarLogic/indicative/shuffleIndicativeTenses";
import shuffleImperativeTenses from "../../Utils/grammarLogic/imperative/shuffleImperativeTenses";
import shuffleSubjunctiveTenses from "../../Utils/grammarLogic/subjunctive/shuffleSubjunctiveTenses";
import shuffleConditionalTenses from "../../Utils/grammarLogic/conditional/shuffleConditionalTenses";

export default function Exercise() {
  const verbListState = useSelector((state) => state.exercise.verbListState);
  const shuffleAction = useSelector((state) => state.exercise.shuffleAction);
  const shuffleState = useSelector((state) => state.exercise.shuffleState);
  const messageState = useSelector((state) => state.exercise.messageState);
  const messageWarning = useSelector((state) => state.exercise.userSelectionMessage);
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
      const personResult = shufflePerson(shuffleState, verbResult, moodResult, tenseResult);
      dispatch(personShuffled(personResult));

      //SHUFFLE NUMBER
      const numberResult = shuffleNumber(shuffleState, verbResult, moodResult, tenseResult, personResult);
      dispatch(numberShuffled(numberResult));

      //SHUFFLE GENDER
      const genderResult = shuffleGender(shuffleState, verbResult);
      dispatch(genderShuffled(genderResult));
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
        <h2 className="exercise__header">French Verb Exercise</h2>
        <p className="exercise__text">
          Practice your french conjugation, enter and verify your answer to the following exercise. When ready, click shuffle for a new exercise!
        </p>
        <div className="exercise__wrapper">
          <div className="exercise__container">
            <GrammarFeature
              shuffleState={verbState}
              option={verbListState}
              type="verb"
            />
            <GrammarFeature
              shuffleState={personState}
              option={personArray}
              type="person"
            />
            <GrammarFeature
              shuffleState={numberState}
              option={numberArray}
              type="number"
            />
            <GrammarFeature
                shuffleState={genderState}
                option={genderArray}
                type="gender"
              />
            <GrammarFeature
              shuffleState={tenseState}
              option={tenseArray}
              type="tense"
            />
            {/* <fieldset className="exercise__fieldset">
              <legend className="exercise__legend">Default</legend> */}
              <GrammarFeature
                shuffleState={moodState}
                option={moodArray}
                type="mood"
              />

            {/* </fieldset> */}
          </div>
          <div className="exercise__answer-container">
            <Answer answer={resultAnswer} />
          </div>
        </div>
      </div>
    </div>
  );
}
