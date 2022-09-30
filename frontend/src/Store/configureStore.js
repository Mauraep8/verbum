import {configureStore} from '@reduxjs/toolkit'
import databaseReducer from './database'

export const store = configureStore({
    reducer: {
        database: databaseReducer
    }, 
})