import {createSlice} from '@reduxjs/toolkit'

// INITIAL STATE 
const initialState = {
    personArrayChecked: [{value: '1er', status: true, category: 'person'},{value: '2ème', status: true, category: 'person'},{value: '3ème', status: true, category: 'person'}],
    genderArrayChecked: [{value: 'féminin', status: true, category: 'gender'},{value: 'masculin', status: true, category: 'gender'},{value: '-none-', status: true, category: 'gender'}],
    numberArrayChecked: [{value: 'singulier', status: true, category: 'number'},{value: 'pluriel', status: true, category: 'number'}],
    tenseArrayChecked: [{value: 'présent', status: true, category: 'tense'},{value: 'passé composé', status: true, category: 'tense'},{value: 'imparfait', status: true, category: 'tense'},{value: 'plus-que-parfait', status: true, category: 'tense'},{value: 'passé', status: true, category: 'tense'},{value: 'passé simple', status: true, category: 'tense'},{value: 'passé antérieur', status: true, category: 'tense'},{value: 'futur simple', status: true, category: 'tense'},{value: 'futur antérieur', status: true, category: 'tense'}],
    moodArrayChecked: [{value: 'indicatif', status: true, category: 'mood'},{value: 'subjonctif', status: true, category: 'mood'},{value: 'impératif', status: true, category: 'mood'},{value: 'conditionnel', status: true, category: 'mood'},],
    shuffleState: [],
    moodState:[],
    tenseState:[],
    personState:[],
    numberState:[],
    genderState:[],
    messageState:[]

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
                        if (!state.personArrayChecked.find(element => element.value === action.payload.value)){
                        state.personArrayChecked.push(action.payload)
                        }
                        break;
                    case 'gender':
                        if(!state.genderArrayChecked.find(element => element.value === action.payload.value)){
                        state.genderArrayChecked.push(action.payload)
                        }
                        break;
                    case 'number':
                        if (!state.numberArrayChecked.find(element => element.value === action.payload.value)){
                        state.numberArrayChecked.push(action.payload)
                        }
                        break;
                    case 'tense':
                        if(!state.tenseArrayChecked.find(element => element.value === action.payload.value)){
                        state.tenseArrayChecked.push(action.payload)
                        }
                        break;
                    case 'mood':
                        if(!state.moodArrayChecked.find(element => element.value === action.payload.value)){
                        state.moodArrayChecked.push(action.payload)
                        }
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
        shuffleDenied : (state, action) =>{
            // console.log(action.payload)
            // console.log(action.payload.slice(0, -12).toUpperCase())
            state.messageState = {action: true, feature: action.payload.slice(0, -12).toUpperCase(), mood:null}
            

        },

        shuffleApproved  : (state, action)=>{
            // console.log(action.payload)
            // remove shuffleState from dispatch getState
            const object = action.payload
            // console.log(object.personArrayChecked)
            const asArray = Object.entries(object)
            const filtered = asArray.filter(([key])=> key !== 'shuffleState')
            const newObject = Object.fromEntries(filtered)
            // console.log(newObject)
            state.shuffleState = newObject
        },

        moodShuffled : (state, action)=>{
            // console.log(action.payload)
            state.moodState = action.payload
        },
        tenseShuffled : (state, action)=>{
            // console.log(action.payload)
            state.tenseState = action.payload
        },
        personShuffled : (state, action)=>{
            // console.log(action.payload)
            state.personState = action.payload
        },
        numberShuffled : (state, action)=>{
            // console.log(action.payload)
            state.numberState = action.payload
        },
        genderShuffled : (state, action)=>{
            // console.log(action.payload)
            state.genderState = action.payload
        }
    }
})

export const {optionChecked, shuffleApproved, shuffleDenied, moodShuffled, tenseShuffled, personShuffled, numberShuffled, genderShuffled} = exerciseSlice.actions
export default exerciseSlice.reducer