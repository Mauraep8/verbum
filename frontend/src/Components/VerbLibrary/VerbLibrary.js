import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";
import {useDispatch} from "react-redux"
import { verbListUpdateAction, verbListUpdated} from "../../Store/exerciseSlice";
import { submitClicked } from "../../Store/databaseSlice";
// import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import { compareArray } from "../../Utils/compareArray";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function VerbLibrary(props) {


    const dispatch = useDispatch()

    const clickHandler = () =>{

    const result = compareArray(props.exerciseVerbList, props.list)
    
    if (props.list.length === 0) { 
        dispatch(submitClicked({message: 'User List is empty, please add verbs', popupAction: 'deleted'}))


    } else if(result===true){
        dispatch(verbListUpdated(props.list))
        dispatch(verbListUpdateAction(true))
        dispatch(submitClicked({message: 'The verb dropmenu has been updated', popupAction: 'added'}))
    }
}
    return (
        <div className="verbLibrary">
            <div className="verbLibrary__container">
                <h1 className="verbLibrary__header">{props.headerText}</h1>
                <p className="verbLibrary__text">{props.text}</p>
                <Searchbar type={props.type} searchInputState={props.searchInput}/>
                <VerbList list={props.list} search={props.search} actionType={props.actionType} popup={props.popup}/>
                {props.button===true &&
                    <ButtonPrimary function={clickHandler} text={'Submit'}/>
                }
            </div>
        </div>
    )
}
