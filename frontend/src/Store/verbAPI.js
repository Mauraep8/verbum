import {createAsyncThunk} from '@reduxjs/toolkit'
import  axios from "axios";


// axios.get('http://localhost:8085/french')
// .then(result => {
//   console.log(result.data)
// })
// .catch(error =>{
//     console.log(error)
// })

// API CALL WITH CREATEASYNCTHUNK FOR VERBS
export const fetchVerbs = createAsyncThunk('verbAPI/fetchVerbs', async () => {
    return axios.get('http://localhost:8085/french')
    .then((result) => result.data)
    .catch((error) => console.log(error))
})
