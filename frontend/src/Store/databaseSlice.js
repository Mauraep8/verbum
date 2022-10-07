import {createSlice} from '@reduxjs/toolkit'

import  axios from "axios";

// GET ALL FRENCH VERBS
const getVerbList = () =>{
    axios.get('http://localhost:8085/french')
    .then(result => {
        console.log(result.data)
    })
    .catch(error =>{
      console.log(error)
    })
}
getVerbList()

// INITIAL STATE OF VERBLIBRARY AND USERLIBRARY
const initialState = {
    verbLibrary: [{verbName: 'aller', id: 1}, {verbName: 'bouger', id: 2}, {verbName: 'dormir', id: 3}],
    userLibrary: [{verbName: 'avoir', id: 4}, {verbName: 'etre', id: 5}, {verbName: 'finir', id: 6}]
}

// SORT LISTS ALPHABETICALLY AFTER VERB IS ADDED OR DELETED
const compare = (a,b) => {
    const verbA = a.verbName.toUpperCase()
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
    reducers: {
        verbAdded: (state, action)=>{
            
            // PUSH NEW VERB INTO USERLIST
            state.userLibrary.push({verbName:action.payload})
            const indexVerb = state.verbLibrary.findIndex(verb =>{
                return verb.verbName === action.payload
            })

            // SORT USERLIST ALPHABETICALLY
            state.userLibrary.sort(compare)

            // REMOVE ADDED VERB FROM VERBLIBRARY
            state.verbLibrary.splice(indexVerb, 1)
        },
    
        verbDeleted: (state, action)=>{

            // PUSH NEW VERB INTO VERBLIBRARY
            state.verbLibrary.push({verbName:action.payload})
            const indexVerb = state.userLibrary.findIndex(verb =>{
                return verb.verbName === action.payload
            })

            // SORT VERBLIBRARY ALPHABETICALLY
            state.verbLibrary.sort(compare)

            // REMOVE ADDED VERB FROM USERLIST
            state.userLibrary.splice(indexVerb, 1)
        }
    }
})

export const {verbAdded, verbDeleted} = databaseSlice.actions
export default databaseSlice.reducer
