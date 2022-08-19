import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrenchPage from "./Pages/French/FrenchPage";
import axios from 'axios'


axios.get('http://localhost:8000/conjugate/fr/manger?mood=indicatif&tense=passé-composé')
.then(result => {
  console.log(result)
})
.catch(error =>{
  console.log(error)
})

axios.get('http://localhost:8085/french')
.then(result => {
  console.log(result)
})
.catch(error =>{
  console.log(error)
})

function App() {
  return (
    <BrowserRouter>
    <Switch>
      {/* <Route path='/' exact component={FrenchPage} />
      <Route path='/french' component={FrenchPage} /> */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
