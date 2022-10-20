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
            console.log(action.payload)
        }
    }
})

export const {optionChecked} = exerciseSlice.actions
export default exerciseSlice.reducer