import axios from 'axios'
import Database from "../../Components/Database/Database.js";

function FrenchPage()  {

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

return (
    <>
    <h1>french</h1>
    <Database/>

    </>
    )
}

export default FrenchPage;