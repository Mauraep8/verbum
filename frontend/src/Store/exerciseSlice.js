import {createSlice} from '@reduxjs/toolkit'
import {fetchVerbs} from './verbAPI'
import {personCheckedArray, genderArrayChecked, numberArrayChecked, tenseArrayChecked, moodArrayChecked} from "../Utils/initialCheckedArray";



// INITIAL STATE 
const initialState = {
    personArrayChecked: personCheckedArray,
    genderArrayChecked: genderArrayChecked,
    numberArrayChecked: numberArrayChecked,
    tenseArrayChecked: tenseArrayChecked,
    moodArrayChecked: moodArrayChecked,
    verbArrayChecked: [],
    shuffleState: [],
    moodState:{result:{value: 'indicatif', status: true, category: 'mood', apiFormat: 'indicatif'}},
    tenseState:{result:{value: 'présent', status: true, category: 'tense', apiFormat: 'présent'}},
    personState:{result:{value: '1er', status: true, category: 'person', apiFormat: 1}},
    numberState:{result:{value: 'singulier', status: true, category: 'number', apiFormat: 1}},
    genderState:{result:{value: 'féminin', status: true, category: 'gender', apiFormat: null}},
    verbState: {result:{apiFormat:null, auxiliaryVerb:"", verbID: 3, category: "verb", initialVerb: "t", primaryVerb:"t", specialVerb: "", status: true, value: "aimer", verbGroup: "group 1", label: "aimer"}},
    messageState:[],
    shuffleAction:[],
    userSelectionMessage:[],
    verbListState: [],
    listSubmitMessage:[],
    verbListApprovedUpdate:[],
    userAnswerState:[],
    apiAnswerState: [],
    resultAnswerState: [],
}

// EXERCISE SLICE
const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  extraReducers: {
    [fetchVerbs.fulfilled]: (state, action) => {
      state.verbListState = action.payload.filter((verb) => verb.initialVerb === "t");
    },
  },
  reducers: {
    optionChecked: (state, action) => {
      if (action.payload.status === true) {
        switch (action.payload.category) {
          case "person":
            if (!state.personArrayChecked.find((element) => element.value === action.payload.value)) {
              state.personArrayChecked.push(action.payload);
            }
            break;
          case "gender":
            if (!state.genderArrayChecked.find((element) => element.value === action.payload.value)) {
              state.genderArrayChecked.push(action.payload);
            }
            break;
          case "number":
            if (!state.numberArrayChecked.find((element) => element.value === action.payload.value)) {
              state.numberArrayChecked.push(action.payload);
            }
            break;
          case "tense":
            if (!state.tenseArrayChecked.find((element) => element.value === action.payload.value)) {
              state.tenseArrayChecked.push(action.payload);
            }
            break;
          case "mood":
            if (!state.moodArrayChecked.find((element) => element.value === action.payload.value)) {
              state.moodArrayChecked.push(action.payload);
            }
            break;
          case "verb":
            if (!state.verbArrayChecked.find((element) => element.value === action.payload.value)) {
              state.verbArrayChecked.push(action.payload);
            }
            break
          default:
            return state;
        }
      } else if (action.payload.status === false) {
        switch (action.payload.category) {
          case "person":
            state.personArrayChecked = state.personArrayChecked.filter(
              (person) => person.value !== action.payload.value
            );
            break;
          case "gender":
            state.genderArrayChecked = state.genderArrayChecked.filter(
              (gender) => gender.value !== action.payload.value
            );
            break;
          case "number":
            state.numberArrayChecked = state.numberArrayChecked.filter(
              (number) => number.value !== action.payload.value
            );
            break;
          case "tense":
            state.tenseArrayChecked = state.tenseArrayChecked.filter(
              (tense) => tense.value !== action.payload.value
            );
            break;
          case "mood":
            state.moodArrayChecked = state.moodArrayChecked.filter(
              (mood) => mood.value !== action.payload.value
            );
            break;
          case "verb":
            // console.log(action.payload)
             state.verbArrayChecked = state.verbArrayChecked.filter(
              (verb) => verb.value !== action.payload.value
            );
            break
          default:
            return state;
        }
      }
    },
    messageCleared: (state, action) => {
      state.messageState = action.payload;
      state.userSelectionMessage = action.payload;
    },
    shuffleDenied: (state, action) => {
      const filteredText = action.payload.slice(0, -12);

      state.messageState = `The ${filteredText.charAt(0).toUpperCase() + filteredText.slice(1)} drop-down menu is missing a checked option.`;
      state.shuffleAction = false;

    },
    shuffleApproved: (state, action) => {
      // remove shuffleState from dispatch getState
      const object = action.payload;

      const asArray = Object.entries(object);
      const filtered = asArray.filter(([key]) => key !== "shuffleState");
      const newObject = Object.fromEntries(filtered);

      state.shuffleState = newObject;
      state.shuffleAction = true;
    },
    shuffleCleared: (state, action) => {
      state.shuffleAction = false;
    },
    userSelectionDenied: (state, action) => {
      state.userSelectionMessage = action.payload;
      state.shuffleAction = false; 
    },
    moodShuffled: (state, action) => {
      // console.log(action.payload)
      state.moodState = action.payload;
    },
    tenseShuffled: (state, action) => {
      // console.log(action.payload)
      state.tenseState = action.payload;
    },
    personShuffled: (state, action) => {
      // console.log(action.payload)
      state.personState = action.payload;
    },
    numberShuffled: (state, action) => {
      // console.log(action.payload)
      state.numberState = action.payload;
    },
    genderShuffled: (state, action) => {
      // console.log(action.payload)
      state.genderState = action.payload;
    },
    verbShuffled: (state, action) => {
      // console.log(action.payload)
      state.verbState = action.payload;
    },
    verbListUpdated: (state, action) => {
      state.verbListState = action.payload;
      state.verbArrayChecked = state.verbArrayChecked.filter(({ value: verb1 }) => action.payload.some(({ value: verb2 }) => verb1 === verb2))   
      state.shuffleAction = false; 
    },
    verbListUpdateAction: (state, action) => {
      state.verbListApprovedUpdate = action.payload;
    },
    answerWritten: (state, action) => {
      // console.log(action.payload,'exerciceSlice')
      state.shuffleAction = false; 
      state.userAnswerState = action.payload
    },
    answerFetched: (state, action) =>{
      // console.log(action.payload, 'exerciceSlice')
      state.apiAnswerState = action.payload
      state.shuffleAction = false;
    },
    answerCompared: (state, action) =>{
      // console.log(action.payload, 'exerciceSlice')
      state.resultAnswerState = action.payload
    },
    answerCleared: (state, action) =>{
      // console.log(action.payload, 'exerciceSlice')
      state.resultAnswerState = action.payload
      state.apiAnswerState = action.payload
      state.userAnswerState = action.payload
    },
  },
});

export const { shuffleCleared,answerCleared, answerCompared, answerFetched, answerWritten,verbListUpdateAction, verbListUpdated, messageCleared, optionChecked, shuffleApproved, shuffleDenied, userSelectionDenied, verbShuffled, moodShuffled, tenseShuffled, personShuffled, numberShuffled, genderShuffled} = exerciseSlice.actions
export default exerciseSlice.reducer