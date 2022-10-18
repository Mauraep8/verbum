import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  axios from "axios";

// API CALL WITH CREATEASYNCTHUNK FOR VERBS
export const fetchVerbs = createAsyncThunk('databaseSlice/fetchVerbs', async () => {
    return axios.get('http://localhost:8085/french')
    .then((result) => result.data)
    .catch((error) => console.log(error))
})

// INITIAL STATE OF VERBLIBRARY AND USERLIBRARY
const initialState = {
    verbLibrary: [],
    userLibrary: [],
    popupAction: [],
    searchVerbLibrary: [], 
    searchUserLibrary: []
}

// SORT LISTS ALPHABETICALLY AFTER VERB IS ADDED OR DELETED
const compare = (a,b) => {
    return a.verbName.localeCompare(b.verbName)
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

            //POPUPACTION VERB ADDED
            state.popupAction = {verbName:action.payload.verbName, popupAction: 'added'}

            // IF VERB IS ADDED WHILE ITS BEING SEARCHED, THEN REMOVE IT FROM SEARCH LIST
            if (state.searchVerbLibrary.length !==0){
                state.verbLibrary = state.verbLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
                state.searchVerbLibrary = state.searchVerbLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
            }
        },
    
        verbDeleted: (state, action)=>{

            // PUSH NEW VERB INTO VERBLIBRARY
            state.verbLibrary.push(action.payload)

            // SORT VERBLIBRARY ALPHABETICALLY
            state.verbLibrary.sort(compare)

            // REMOVE ADDED VERB FROM USERLIST
            state.userLibrary = state.userLibrary.filter((verb) => verb.verbName !== action.payload.verbName)

            //POPUPACTION VERB DELETED
            state.popupAction = {verbName:action.payload.verbName, popupAction: 'deleted'}

            // IF VERB IS DELETED WHILE ITS BEING SEARCHED, THEN REMOVE IT FROM SEARCH LIST
            if (state.searchUserLibrary.length !==0){
                state.userLibrary = state.userLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
                state.searchUserLibrary = state.searchUserLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
            }
        },

        verbSearched: (state, action) =>{

            //IF SEARCHBAR OF VERBLIBRARY COMPONENT IS ACTIVE
            if (action.payload.component=== 'verbLibrary'){
                if (action.payload.value === ''){
                    state.searchVerbLibrary = []
                } else{
                    const searchedVerb = state.verbLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
                    if (searchedVerb.length === 0 ){
                        state.searchVerbLibrary = null
                    } else{
                        state.searchVerbLibrary = state.verbLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
                    }
                }
            }

            //IF SEARCHBAR OF USERLIBRARY COMPONENT IS ACTIVE
            if (action.payload.component=== 'userLibrary'){
                if (action.payload.value === ''){
                    state.searchUserLibrary = []
                } else{
                    const searchedVerb = state.userLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
                    if (searchedVerb.length === 0 ){
                        state.searchUserLibrary = null
                    } else{
                        state.searchUserLibrary = state.userLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
                    }
                }
            }
        },
    }
})

export const {verbAdded, verbDeleted, verbSearched} = databaseSlice.actions
export default databaseSlice.reducer
