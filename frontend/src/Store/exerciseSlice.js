import {createSlice} from '@reduxjs/toolkit'

// INITIAL STATE 
const initialState = {
    personArrayChecked: [],
    genderArrayChecked: [],
    numberArrayChecked: [],
    tenseArrayChecked: [],
    moodArrayChecked: [],
    shuffleState: [],
}

// EXERCISE SLICE
const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    extraReducers:{

    },
    reducers: {
        optionChecked: (state, action)=>{
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
                        state.genderArrayChecked = state.genderArrayChecked.filter((gender)=> gender.value !== action.payload.value)
                        break;
                    case 'number':
                        state.numberArrayChecked = state.numberArrayChecked.filter((number)=> number.value !== action.payload.value)
                        break;
                    case 'tense':
                        state.tenseArrayChecked = state.tenseArrayChecked.filter((tense)=> tense.value !== action.payload.value)
                        break;
                    case 'mood':
                        state.moodArrayChecked = state.moodArrayChecked.filter((mood)=> mood.value !== action.payload.value)
                        break
                    default:
                        return state;
                }
            }
        },
        shuffleClicked  : (state, action)=>{
           
            // remove shuffleState from dispatch getState
            const object = action.payload.exercise
            const asArray = Object.entries(object)
            const filtered = asArray.filter(([key])=> key !== 'shuffleState')
            const newObject = Object.fromEntries(filtered)

            state.shuffleState = newObject
        }
    }
})

export const {optionChecked, shuffleClicked} = exerciseSlice.actions
export default exerciseSlice.reducer