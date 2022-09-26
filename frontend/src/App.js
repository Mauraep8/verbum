import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrenchPage from "./Pages/French/FrenchPage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={FrenchPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/french' component={FrenchPage} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
