import React, {Provider}  from "react-redux";
import { store } from "../../Store/configureStore";
import axios from 'axios'
import Database from "../../Components/Database/Database.js";
import Exercice from "../../Components/Exercise/Exercise.js";
import Navbar from "../../Components/Navbar/Navbar";
// import { fetchVerbs } from "../../Store/databaseSlice";
import { fetchVerbs } from "../../Store/verbAPI";

// import { fetchVerbs } from "../../Store/configureStore";
import { useEffect } from "react";



// get conjugatione
// axios.get('http://localhost:8000/conjugate/fr/manger?mood=indicatif&tense=passé-composé')
// .then(result => {
//   console.log(result)
// })
// .catch(error =>{
//   console.log(error)
// })


function FrenchPage()  {

useEffect(() => {
    store.dispatch(fetchVerbs());
}, []);

  return (
      <Provider store={store}>
        <Navbar/>
        <Exercice/>
        <Database/>
      </Provider>
  )
}

export default FrenchPage;