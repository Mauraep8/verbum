import {configureStore} from '@reduxjs/toolkit'
import databaseReducer from './databaseSlice'

export const store = configureStore({
    reducer: {
        database: databaseReducer
    }, 
})