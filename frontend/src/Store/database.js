import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    verbLibrary: [{verbName: 'aller', id: 1}, {verbName: 'bouger', id: 2}, {verbName: 'dormir', id: 3}],
    userLibrary: [{verbName: 'avoir', id: 4}, {verbName: 'etre', id: 5}, {verbName: 'finir', id: 6}]
}

const databaseSlice = createSlice({
    name: 'database',
    initialState,
    reducers: {
        verbAdded: (state)=>{
            state.userLibrary = []
        }      
    },
        verbDeleted: (state, action)=>{
            state.filter(verb=>verb === action.payload.verbName)
        }
})

export const {verbAdded, verbDeleted} = databaseSlice.actions
export default databaseSlice.reducer

// verbAdded: (state, action)=>
// state.userLibrary.push({
//     verbName: action.payload.verbName
// })