import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
// import { FunctionContext } from '../Database/Database';
import { ACTIONS } from '../Database/Database';

import ListEntry from "../ListEntry/ListEntry";

export default function UserList(props)  {
    const {dispatch} = useContext(ThemeContext)

    return (
        <div className="verbList">
            <h1 className="verbList__text">UserList container</h1>
            <div className="verbList__container">
                {props.verbList.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb}
                    verbName={singleVerb}
                    buttonAction={'delete'}
                    />
                })}
            </div>
            <div className="verbList__button-container">
                <button onClick={()=> dispatch({type: ACTIONS.ADD, payload: {verbList: props.verbList}})}>submit</button>
            </div>
        </div>
    )
}