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
    moodState:[],
    tenseState:[],
    personState:[],
    numberState:[],
    genderState:[],
    verbState: [],
    messageState:[],
    shuffleAction:[],
    userSelectionMessage:[],
    verbListState: [],
    listSubmitMessage:[],
    verbListApprovedUpdate:[] 

}

// EXERCISE SLICE
const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  extraReducers: {
    [fetchVerbs.fulfilled]: (state, action) => {
      state.verbListState = action.payload.filter((verb) => verb.initialVerb === "true");
    },
  },
  reducers: {
    optionChecked: (state, action) => {
    // console.log(action.payload)
      if (action.payload.status === true) {
        switch (action.payload.category) {
          case "person":
            if (
              !state.personArrayChecked.find(
                (element) => element.value === action.payload.value
              )
            ) {
              state.personArrayChecked.push(action.payload);
            }
            break;
          case "gender":
            if (
              !state.genderArrayChecked.find(
                (element) => element.value === action.payload.value
              )
            ) {
              state.genderArrayChecked.push(action.payload);
            }
            break;
          case "number":
            if (
              !state.numberArrayChecked.find(
                (element) => element.value === action.payload.value
              )
            ) {
              state.numberArrayChecked.push(action.payload);
            }
            break;
          case "tense":
            if (
              !state.tenseArrayChecked.find(
                (element) => element.value === action.payload.value
              )
            ) {
              state.tenseArrayChecked.push(action.payload);
            }
            break;
          case "mood":
            if (
              !state.moodArrayChecked.find(
                (element) => element.value === action.payload.value
              )
            ) {
              state.moodArrayChecked.push(action.payload);
            }
            break;
          case "verb":
            // console.log(action.payload)
            if (
              !state.verbArrayChecked.find(
                (element) => element.value === action.payload.value
              )
            ) {
              state.verbArrayChecked.push(action.payload);
            }
            break
          default:
            return state;
        }
      } else {
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

      state.messageState = {
        action: true,
        feature: filteredText.charAt(0).toUpperCase() + filteredText.slice(1),
        mood: null,
      };
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
    userSelectionDenied: (state, action) => {
      state.userSelectionMessage = action.payload;
    },
    moodShuffled: (state, action) => {
      state.moodState = action.payload;
    },
    tenseShuffled: (state, action) => {
      state.tenseState = action.payload;
    },
    personShuffled: (state, action) => {
      state.personState = action.payload;
    },
    numberShuffled: (state, action) => {
      state.numberState = action.payload;
    },
    genderShuffled: (state, action) => {
      state.genderState = action.payload;
    },
    verbShuffled: (state, action) => {
      state.verbState = action.payload;
    },
    verbListUpdated: (state, action) => {
      state.verbListState = action.payload;
      state.verbArrayChecked = state.verbArrayChecked.filter(({ verbName: verb1 }) => action.payload.some(({ verbName: verb2 }) => verb1 === verb2))    
    },
    verbListUpdateAction: (state, action) => {
      state.verbListApprovedUpdate = action.payload;
    },
  },
});

export const {verbListUpdateAction, verbListUpdated, messageCleared, optionChecked, shuffleApproved, shuffleDenied, userSelectionDenied, verbShuffled, moodShuffled, tenseShuffled, personShuffled, numberShuffled, genderShuffled} = exerciseSlice.actions
export default exerciseSlice.reducer