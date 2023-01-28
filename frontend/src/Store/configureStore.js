import {configureStore,  createAsyncThunk} from '@reduxjs/toolkit'
import databaseReducer from './databaseSlice'
import exerciseReducer from "./exerciseSlice";

import  axios from "axios";

// export const fetchVerbs = createAsyncThunk('databaseSlice/fetchVerbs', async () => {
//     return axios.get('http://localhost:8085/french')
//     .then((result) => result.data)
//     .catch((error) => console.log(error))
// })

export const store = configureStore({
    reducer: {
        database: databaseReducer,
        exercise: exerciseReducer
    }, 
    // extraReducers:{
    //     //EXTRA REDUCER SETS STATE WITH API CALL
    //     [fetchVerbs.fulfilled]: (state, action) => {
    //         // state.verbLibrary = action.payload.filter((verb)=> verb.initialVerb === null)
    //         // state.userLibrary = action.payload.filter((verb)=> verb.initialVerb === 'true')
    //         console.log(fetchVerbs())
    //     },
    // },
})