import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

export default function VerbList(props)  {

    // ARRAY OF ALL VERBS
    const verbs = useContext(ThemeContext)

 
    return (
        <div className="verbList">
            <h1 className="verbList__text">VerbList container</h1>
            <div className="verbList__container">
                {verbs.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb.id}
                    verbName={singleVerb.verb}
                    buttonText={'+'}
                    buttonAction={'()=> dispatch({type: ACTIONS.ADD, payload: {verb: props.verbName'}/>
                })}
            </div>
        </div>
    )
}
