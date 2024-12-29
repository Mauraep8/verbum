// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

// import  axios from "axios";
import {fetchVerbs} from './verbAPI'



// INITIAL STATE OF VERBLIBRARY AND USERLIBRARY
const initialState = {
    verbLibrary: [],
    userLibrary: [],
    submitMessage: [],
    popupActionAdded: [],
    popupActionRemoved: [],
    searchVerbLibrary: [], 
    searchUserLibrary: [],
    searchVerbInput: [],
    searchUserInput: [],
    databaseState:[]
}

// SORT LISTS ALPHABETICALLY AFTER VERB IS ADDED OR DELETED
const compare = (a,b) => {
    return a.value.localeCompare(b.value)
}


// DATABASE SLICE
const databaseSlice = createSlice({
    name: 'database',
    initialState,
    extraReducers:{
        // //EXTRA REDUCER SETS STATE WITH API CALL
        // !!! SE MEFIER TAKEN OUT OF LIST, WILL BE ADDED LATER WITH POSTGRES
        
        [fetchVerbs.fulfilled]: (state, action) => {
            state.verbLibrary = action.payload.filter((verb) => verb.initialVerb === 'f');
            state.userLibrary = action.payload.filter((verb)=> verb.initialVerb === "t")
        },
    },
    reducers: {
        verbAdded: (state, action)=>{
            
            // PUSH NEW VERB INTO USERLIST
            state.userLibrary.push(action.payload)

            // SORT USERLIST ALPHABETICALLY
            state.userLibrary.sort(compare)

            // REMOVE ADDED VERB FROM VERBLIBRARY
            state.verbLibrary = state.verbLibrary.filter((verb) => verb.value !== action.payload.value)

            //POPUPACTION VERB ADDED
            state.popupActionAdded = {value:action.payload.value, popupAction: 'added'}
            state.popupActionRemoved = []

            // IF VERB IS ADDED WHILE ITS BEING SEARCHED, THEN REMOVE IT FROM SEARCH LIST
            if (state.searchVerbLibrary.length !==0){
                state.verbLibrary = state.verbLibrary.filter((verb) => verb.value !== action.payload.value)
                state.searchVerbLibrary = state.searchVerbLibrary.filter((verb) => verb.value !== action.payload.value)
            }
            
            //IF VERB IS LAST IN VERBSEARCHLIST AND IS DELETED THEN THE SEARCHBAR INPUT CLEARS
            if (action.payload.verbSearchList === undefined){
                return
            } else if (action.payload.verbSearchList.length === 1) {
                state.searchVerbInput = null
            }
        },
    
        verbDeleted: (state, action)=>{

            // PUSH NEW VERB INTO VERBLIBRARY
            state.verbLibrary.push(action.payload)

            // SORT VERBLIBRARY ALPHABETICALLY
            state.verbLibrary.sort(compare)

            // REMOVE ADDED VERB FROM USERLIST
            state.userLibrary = state.userLibrary.filter((verb) => verb.value !== action.payload.value)

            //POPUPACTION VERB DELETED
            state.popupActionRemoved = {value:action.payload.value, popupAction: 'removed'}
            state.popupActionAdded = []

            // IF VERB IS DELETED WHILE ITS BEING SEARCHED, THEN REMOVE IT FROM SEARCH LIST
            if (state.searchUserLibrary.length !==0){
                state.userLibrary = state.userLibrary.filter((verb) => verb.value !== action.payload.value)
                state.searchUserLibrary = state.searchUserLibrary.filter((verb) => verb.value !== action.payload.value)
            }

            //IF VERB IS LAST IN USERSEARCHLIST AND IS DELETED THEN THE SEARCHBAR INPUT CLEARS
            if (action.payload.userSearchList === undefined){
                return
            } else if (action.payload.userSearchList.length === 1) {
                state.searchUserInput = null
            }
        },

        verbSearched: (state, action) =>{

            state.popupActionAdded = []
            state.popupActionRemoved = []

            //RESET SEARCHVERBINPUT STATE IF IT WAS PREVIOUSLY NULL
            if (state.searchVerbInput === null) {
                state.searchVerbInput = []
            }
            
            //IF SEARCHBAR OF VERBLIBRARY COMPONENT IS ACTIVE
            if (action.payload.component=== 'verbLibrary'){
                if (action.payload.value === ''){
                    state.searchVerbLibrary = []
                } else{
                    const searchedVerb = state.verbLibrary.filter((verb) => verb.value.startsWith(action.payload.value))
                    if (searchedVerb.length === 0 ){
                        state.searchVerbLibrary = null
                    } else{
                        state.searchVerbLibrary = state.verbLibrary.filter((verb) => verb.value.startsWith(action.payload.value))
                    }
                }
            }

            //RESET SEARCHUSERINPUT STATE IF IT WAS PREVIOUSLY NULL
            if (state.searchUserInput === null) {
                state.searchUserInput = []
            }

            //IF SEARCHBAR OF USERLIBRARY COMPONENT IS ACTIVE
            if (action.payload.component=== 'userLibrary'){
                if (action.payload.value === ''){
                    state.searchUserLibrary = []
                } else{
                    const searchedVerb = state.userLibrary.filter((verb) => verb.value.startsWith(action.payload.value))
                    if (searchedVerb.length === 0 ){
                        state.searchUserLibrary = null
                    } else{
                        state.searchUserLibrary = state.userLibrary.filter((verb) => verb.value.startsWith(action.payload.value))
                    }
                }
            }
        },
        submitClicked: (state, action)=>{
            state.submitMessage = action.payload.message
            state.popupActionAdded = []
            state.popupActionRemoved = []

        },
        popupClosed: (state, action)=>{

            if (action.payload.popupType === "added"){
                state.popupActionAdded = []

            } else if (action.payload.popupType === "removed") {
                state.popupActionRemoved = []
            }
        },
        openDatabase:(state, action)=>{
            state.databaseState = action.payload
        },
        closeDatabase:(state, action)=>{
            state.databaseState = action.payload
        }
    }
})

export const {popupClosed, submitClicked, verbAdded, verbDeleted, verbSearched, openDatabase, closeDatabase} = databaseSlice.actions
export default databaseSlice.reducer
