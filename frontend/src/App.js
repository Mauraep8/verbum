import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrenchPage from "./Pages/French/FrenchPage";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={FrenchPage} />
      <Route path='/french' component={FrenchPage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
