import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import  axios from "axios";


export const fetchVerbs = createAsyncThunk('databaseSlice/fetchVerbs', async () => {
    return axios.get('http://localhost:8085/french')
    .then((result) => result.data)
    .catch((error) => console.log(error))
})

// INITIAL STATE OF VERBLIBRARY AND USERLIBRARY
const initialState = {
    verbLibrary: [],
    userLibrary: []
}

// SORT LISTS ALPHABETICALLY AFTER VERB IS ADDED OR DELETED
const compare = (a,b) => {
    // console.log(a)
    // console.log(a.verbName)

    const verbA = a.verbName.toUpperCase()
    
    // console.log(verbA)
    const verbB = b.verbName.toUpperCase()

    let comparison = 0
    if (verbA > verbB) {
        comparison = 1

    } else if (verbA < verbB){
        comparison = -1
    }
    return comparison
}

// DATABASE SLICE
const databaseSlice = createSlice({
    name: 'database',
    initialState,
    extraReducers:{
        //EXTRA REDUCER SETS STATE WITH API CALL
        [fetchVerbs.fulfilled]: (state, action) => {
            state.verbLibrary = action.payload.filter((verb)=> verb.initialVerb === null)
            state.userLibrary = action.payload.filter((verb)=> verb.initialVerb === 'true')
        },
    },
    reducers: {
        verbAdded: (state, action)=>{
            
            // PUSH NEW VERB INTO USERLIST
            state.userLibrary.push(action.payload)

            // SORT USERLIST ALPHABETICALLY
            state.userLibrary.sort(compare)

            // REMOVE ADDED VERB FROM VERBLIBRARY
            state.verbLibrary = state.verbLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
        },
    
        verbDeleted: (state, action)=>{

            // PUSH NEW VERB INTO VERBLIBRARY
            state.verbLibrary.push(action.payload)

            // SORT VERBLIBRARY ALPHABETICALLY
            state.verbLibrary.sort(compare)

            // REMOVE ADDED VERB FROM USERLIST
            state.userLibrary = state.userLibrary.filter((verb) => verb.verbName !== action.payload.verbName)

        }
    }
})

export const {verbAdded, verbDeleted} = databaseSlice.actions
export default databaseSlice.reducer
