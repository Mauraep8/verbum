import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import UserLibrary from "../../Components/UserLibrary/UserLibrary";
import React, { useReducer } from "react";



export const ACTIONS = {
    ADD: 'ADD',
    DELETE: 'DELETE'
}

function reducer(verbs, action){
    switch (action.type) {
        case ACTIONS.ADD:
            return Array.from(new Set([...verbs, action.payload.verb]))
        case ACTIONS.DELETE:
            return verbs.filter(verb => verb !==action.payload.verb)
        default:
            return verbs
    }
}



export const DatabaseContext = React.createContext()

const initialState = ['aimer', 'avoir']

export default function Database() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DatabaseContext.Provider value={dispatch}>
            <div className="database">
                <h2 className="database__text">Database</h2>
                <div className="database__container">
                    <VerbLibrary newVerbList={state}/>
                    <UserLibrary verbList={state}/>
                </div>
            </div>
        </DatabaseContext.Provider>
    )
};
