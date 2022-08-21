import React, {useState, useEffect}  from "react";
import axios from 'axios'
import Database from "../../Components/Database/Database.js";

// get conjugatione
// axios.get('http://localhost:8000/conjugate/fr/manger?mood=indicatif&tense=passé-composé')
// .then(result => {
//   console.log(result)
// })
// .catch(error =>{
//   console.log(error)
// })

export const ThemeContext = React.createContext()

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
  // console.log(verbs)


  return (
      <ThemeContext.Provider value={verbs}>
        <h1>french</h1>
        <Database/>
      </ThemeContext.Provider>
  )
}

export default FrenchPage;