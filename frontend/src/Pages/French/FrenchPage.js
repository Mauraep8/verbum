import React, {Provider}  from "react-redux";
import { store } from "../../Store/configureStore";
import Database from "../../Components/Database/Database.js";
import Exercice from "../../Components/Exercise/Exercise.js";
import Navbar from "../../Components/Navbar/Navbar";
import { fetchVerbs } from "../../Store/verbAPI";
import { useEffect } from "react";

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