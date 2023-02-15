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
    searchUserInput: []
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
        // //EXTRA REDUCER SETS STATE WITH API CALL
        // !!! SE MEFIER TAKEN OUT OF LIST, WILL BE ADDED LATER WITH POSTGRES
        // !!! FAILLIR, ouir, gesir, choir, echoir, dechoir paître repaître TAKEN OUT
        [fetchVerbs.fulfilled]: (state, action) => {
            state.verbLibrary = action.payload.filter(
              (verb) =>
                verb.initialVerb === null &&
                verb.verbName !== "se mefier" &&
                verb.verbName !== "faillir" &&
                verb.verbName !== "gésir" &&
                verb.verbName !== "ouir" &&
                verb.verbName !== "choir" &&
                verb.verbName !== "échoir" &&
                verb.verbName !== "déchoir" &&
                verb.verbName !== "paître" &&
                verb.verbName !== "repaître"
            );
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
            state.popupActionAdded = {verbName:action.payload.verbName, popupAction: 'added'}
            state.popupActionRemoved = []

            // IF VERB IS ADDED WHILE ITS BEING SEARCHED, THEN REMOVE IT FROM SEARCH LIST
            if (state.searchVerbLibrary.length !==0){
                state.verbLibrary = state.verbLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
                state.searchVerbLibrary = state.searchVerbLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
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
            state.userLibrary = state.userLibrary.filter((verb) => verb.verbName !== action.payload.verbName)

            //POPUPACTION VERB DELETED
            state.popupActionRemoved = {verbName:action.payload.verbName, popupAction: 'removed'}
            state.popupActionAdded = []

            // IF VERB IS DELETED WHILE ITS BEING SEARCHED, THEN REMOVE IT FROM SEARCH LIST
            if (state.searchUserLibrary.length !==0){
                state.userLibrary = state.userLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
                state.searchUserLibrary = state.searchUserLibrary.filter((verb) => verb.verbName !== action.payload.verbName)
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
                    const searchedVerb = state.verbLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
                    if (searchedVerb.length === 0 ){
                        state.searchVerbLibrary = null
                    } else{
                        state.searchVerbLibrary = state.verbLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
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
                    const searchedVerb = state.userLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
                    if (searchedVerb.length === 0 ){
                        state.searchUserLibrary = null
                    } else{
                        state.searchUserLibrary = state.userLibrary.filter((verb) => verb.verbName.startsWith(action.payload.value))
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
        }
    }
})

export const {popupClosed, submitClicked, verbAdded, verbDeleted, verbSearched} = databaseSlice.actions
export default databaseSlice.reducer
