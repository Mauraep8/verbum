import React, {useState, useEffect, useReducer, useMemo}  from "react";
import axios from 'axios'
import Database from "../../Components/Database/Database.js";
import Exercice from "../../Components/Exercise/Exercise.js";
import { ACTIONS } from "../../Components/Database/Database";
import Navbar from "../../Components/Navbar/Navbar";

// get conjugatione
// axios.get('http://localhost:8000/conjugate/fr/manger?mood=indicatif&tense=passé-composé')
// .then(result => {
//   console.log(result)
// })
// .catch(error =>{
//   console.log(error)
// })

//REDUCER TO OPERATE ADD + DELETE BUTTONS FOR DATABASE LISTS
function reducer(verbList, action){
  switch (action.type) {
    case ACTIONS.ADD:
      return verbList = action.payload.verbList
    default:
      return verbList
  }
}

export const ThemeContext = React.createContext()

// INITIAL STATE FOR DATABSE LIST + EXERCISE LIST
const initialState = ['aimer', 'avoir']

function FrenchPage()  {

  // SET STATE ALL FRENCH VERBS
  const [verbs, setVerbs] = useState([])
 
  useEffect(()=>{
    getVerbList();
  }, [])

  // GET ALL FRENCH VERBS
  const getVerbList = () =>{
      axios.get('http://localhost:8085/french')
      .then(result => {
          setVerbs(result.data)
      })
      .catch(error =>{
        console.log(error)
      })
  }

  //USEREDUCER TO OPERATE, ADD DELETE BUTTONS FOR DATABASE LISTS
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    ()=>({state}),
    [state]
  )

    

  return (
      <ThemeContext.Provider value={{ verbs, dispatch, value}}>
        <Navbar/>
        <Exercice/>
        <Database/>
      </ThemeContext.Provider>
  )
}

export default FrenchPage;