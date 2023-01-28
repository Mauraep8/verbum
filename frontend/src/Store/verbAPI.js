import {createAsyncThunk} from '@reduxjs/toolkit'
import  axios from "axios";


// API CALL WITH CREATEASYNCTHUNK FOR VERBS
export const fetchVerbs = createAsyncThunk('verbAPI/fetchVerbs', async () => {
    return axios.get('http://localhost:8085/french')
    .then((result) => result.data)
    .catch((error) => console.log(error))
})