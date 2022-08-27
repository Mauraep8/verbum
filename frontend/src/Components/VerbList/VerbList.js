import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

export default function VerbList(props)  {

    // ARRAY OF ALL VERBS
    const {verbs} = useContext(ThemeContext)

    return (
        <div className="verbList">
            <div className="verbList__container">
                {verbs.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb.id}
                    id={singleVerb.id}
                    verbName={singleVerb.verb}
                    buttonAction={'add'}/>
                })}
            </div>
        </div>
    )
}
