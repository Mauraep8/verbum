import { useContext} from "react";
// import useToggle from "../../CustomHooks/useToggle.js";
import "./ListEntry.scss";
// import Checkbox from "../Checkbox/Checkbox";
import { FunctionContext } from '../Database/Database';
import { ACTIONS } from '../Database/Database';



function ListEntry(props)  {

const dispatch = useContext(FunctionContext)

return (
    <div className="ListEntry">
        <div className="ListEntry__container">
            <div className="ListEntry__button-container">
                <button className="ListEntry__button" name={props.verbName} onClick={()=> dispatch({type: ACTIONS.ADD, payload: {verb: props.verbName}})}>{props.buttonText}</button>
            </div>
            <div className="ListEntry__text-container">
                <p className="ListEntry__text">{props.verbName}</p>
            </div>
        </div>
    </div>
    )
}

export default ListEntry;