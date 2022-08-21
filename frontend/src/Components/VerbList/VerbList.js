import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import { FunctionContext } from '../Database/Database';
import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

export default function VerbList(props)  {

    // CALLBACK FUNCTION THAT TAKES IN NEW ARRAY
    const functionVerbList = useContext(FunctionContext)
    
    // ARRAY OF ALL VERBS
    const verbs = useContext(ThemeContext)

    // NEW ARRAY OF CHOSEN VERBS FROM VERBLIST/LISTENTRY
    let checkedVerbArray = []

    const toggleChecked = (e) => {
        if (e.target.checked === true){
            checkedVerbArray.push(e.target.value)
        } else {
            const index = checkedVerbArray.indexOf(e.target.value)
            if (index > -1){
                checkedVerbArray.splice(index,1)
            }
        }
    }

    return (
        <div className="verbList">
            <h1 className="verbList__text">VerbList container</h1>
            <div className="verbList__container">
                {verbs.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb.id}
                    verbName={singleVerb.verb}
                    aFunction={toggleChecked}/>
                })}
            </div>
            <div className="verbList__button-container">
                <button onClick={()=>{functionVerbList(checkedVerbArray)}} className="verbList__button">Add</button>
            </div>
        </div>
    )
}
