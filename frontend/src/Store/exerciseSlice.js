import {createSlice} from '@reduxjs/toolkit'
// import  axios from "axios";

// INITIAL STATE 
const initialState = {
    personArrayChecked: [],
    genderArrayChecked: [],
    numberArrayChecked: [],
    tenseArrayChecked: [],
    moodArrayChecked: [],
}

// EXERCISE SLICE
const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    extraReducers:{

    },
    reducers: {
        optionChecked: (state, action)=>{
            // console.log(action.payload)
            if(action.payload.status === true){
                switch (action.payload.category) {
                    case 'person':
                        state.personArrayChecked.push(action.payload)
                        break;
                    case 'gender':
                        state.genderArrayChecked.push(action.payload)
                        break;
                    case 'number':
                        state.numberArrayChecked.push(action.payload)
                        break;
                    case 'tense':
                        state.tenseArrayChecked.push(action.payload)
                        break;
                    case 'mood':
                        state.moodArrayChecked.push(action.payload)
                        break
                    default:
                        return state;
                }
            } else {
                switch (action.payload.category) {
                    case 'person':
                        state.personArrayChecked = state.personArrayChecked.filter((person)=> person.value !== action.payload.value)
                        break;
                    case 'gender':
                        state.genderArrayChecked.push(action.payload)
                        break;
                    case 'number':
                        state.numberArrayChecked.push(action.payload)
                        break;
                    case 'tense':
                        state.tenseArrayChecked.push(action.payload)
                        break;
                    case 'mood':
                        state.moodArrayChecked.push(action.payload)
                        break
                    default:
                        return state;
                }
            }
        }
    }
})

export const {optionChecked} = exerciseSlice.actions
export default exerciseSlice.reducer