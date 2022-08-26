import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

export default function VerbList(props)  {

    // ARRAY OF ALL VERBS
    const {verbs} = useContext(ThemeContext)

    // const [verbList, setVerbList] = useState([])

    // let clickedVerbArray = props.newVerbList
    // console.log(clickedVerbArray)
    // let newList
    // for (let i = 0; i < clickedVerbArray.length; i++) {
    //     const clickedVerb = clickedVerbArray[i];
    //     newList = verbs.filter(verb => verb.verb !== clickedVerb)
    // }
    // console.log(newList)    

    return (
        <div className="verbList">
            <div className="verbList__container">
                {verbs.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb.id}
                    verbName={singleVerb.verb}
                    buttonAction={'add'}/>
                })}
            </div>
        </div>
    )
}
