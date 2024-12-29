import {configureStore,  createAsyncThunk} from '@reduxjs/toolkit'
import databaseReducer from './databaseSlice'
import exerciseReducer from "./exerciseSlice";
import  axios from "axios";


export const store = configureStore({
    reducer: {
        database: databaseReducer,
        exercise: exerciseReducer
    }, 

})