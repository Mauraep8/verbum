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

const initialState = {
    verbLibrary: [{verbName: 'aller', id: 1}, {verbName: 'bouger', id: 2}, {verbName: 'dormir', id: 3}],
    userLibrary: [{verbName: 'avoir', id: 4}, {verbName: 'etre', id: 5}, {verbName: 'finir', id: 6}]
}

const databaseSlice = createSlice({
    name: 'database',
    initialState,
    reducers: {
        verbAdded: (state, action)=>{
            
            state.userLibrary.push({verbName:action.payload})
            const indexVerb = state.verbLibrary.findIndex(verb =>{
                return verb.verbName === action.payload
            })
            state.verbLibrary.splice(indexVerb, 1)

        },
    
        verbDeleted: (state, action)=>{
            console.log(action)
            state.verbLibrary.push({verbName:action.payload})
            const indexVerb = state.userLibrary.findIndex(verb =>{
                return verb.verbName === action.payload
            })
            state.userLibrary.splice(indexVerb, 1)
        }
    }
})

export const {verbAdded, verbDeleted} = databaseSlice.actions
export default databaseSlice.reducer
