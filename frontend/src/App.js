import logo from './logo.svg';
import './App.css';
import axios from 'axios'


axios.get('http://localhost:8080/')
.then(result => {
  console.log(result)
})
.catch(error =>{
  console.log(error)
})

axios.get('http://localhost:8085/')
.then(result => {
  console.log(result)
})
.catch(error =>{
  console.log(error)
})

axios.get('http://localhost:8000/conjugate/fr/manger')
.then(result => {
  console.log(result)
})
.catch(error =>{
  console.log(error)
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
