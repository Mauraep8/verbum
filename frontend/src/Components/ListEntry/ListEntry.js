import { useState} from "react";
// import useToggle from "../../CustomHooks/useToggle.js";
import "./ListEntry.scss";
// import Checkbox from "../Checkbox/Checkbox";

function ListEntry(props)  {


return (
    <div className="ListEntry">
        <div className="ListEntry__container">
            <div className="ListEntry__checkbox-container">
                <input className="ListEntry__checkbox" type="checkbox" value={props.verbName} onChange={props.aFunction}/>
            </div>
            <div className="ListEntry__text-container">
                <p className="ListEntry__text">{props.verbName}</p>
            </div>
        </div>
    </div>
    )
}

export default ListEntry;