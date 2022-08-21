import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import UserLibrary from "../../Components/UserLibrary/UserLibrary";
import React, { useState, useContext } from "react";
import { ThemeContext } from '../../Pages/French/FrenchPage';

export const FunctionContext = React.createContext()

function Database() {

    const verbs = useContext(ThemeContext)

    const [checkedVerbList, setCheckedVerbList] = useState([])
    
    
    let newList = []

    const verbList = (array) =>{
        if (array.length === 0) return
        for (let i = 0; i < array.length; i++) {
            const filterVerbs = verbs.find(singleVerb => singleVerb.verb === array[i])
            newList.push(filterVerbs)


        }
        setCheckedVerbList(newList)
    }


    return (
        <FunctionContext.Provider value={verbList}>
            <div className="database">
                <h1>database</h1>
                <div className="database__container">
                    <VerbLibrary/>
                    <UserLibrary listVerbs={checkedVerbList}/>
                </div>
            </div>
        </FunctionContext.Provider>
    )
}

export default Database;
