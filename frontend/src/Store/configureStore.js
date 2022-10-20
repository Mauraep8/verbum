import {configureStore} from '@reduxjs/toolkit'
import databaseReducer from './databaseSlice'
import  exerciseReducer from "./exerciseSlice";

export const store = configureStore({
    reducer: {
        database: databaseReducer,
        exercise: exerciseReducer
    }, 
})