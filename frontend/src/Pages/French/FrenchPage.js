import React, {useState, useEffect, useReducer}  from "react";
import axios from 'axios'
import Database from "../../Components/Database/Database.js";
import Exercice from "../../Components/Exercice/Exercise.js";
import { ACTIONS } from "../../Components/Database/Database";

// get conjugatione
// axios.get('http://localhost:8000/conjugate/fr/manger?mood=indicatif&tense=passé-composé')
// .then(result => {
//   console.log(result)
// })
// .catch(error =>{
//   console.log(error)
// })

function reducer(verbList, action){
  switch (action.type) {
    case ACTIONS.ADD:
      return verbList = action.payload.verbList
    default:
      return verbList
  }
}

export const ThemeContext = React.createContext()

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

  //NEW VERB LIST FOR THE EXERCICE
  let newVerbList =[]
  const [state, dispatch] = useReducer(reducer, initialState)
  const filteredVerbList = (array) =>{
    for (let i = 0; i < array.length; i++) {
      const singleVerb = array[i];
      const filteredVerb = verbs.filter(verb => verb.verb === singleVerb)
      newVerbList.push(filteredVerb[0])
    }
  }
  filteredVerbList(state)

  return (
      <ThemeContext.Provider value={{ verbs, dispatch, newVerbList}}>
        <h1>french</h1>
        <Exercice/>
        <Database/>
      </ThemeContext.Provider>
  )
}

export default FrenchPage;