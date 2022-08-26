import { useContext, useEffect, useRef} from "react";
// import useToggle from "../../CustomHooks/useToggle.js";
import "./ListEntry.scss";
// import Checkbox from "../Checkbox/Checkbox";
import { FunctionContext } from '../Database/Database';
import { ACTIONS } from '../Database/Database';



export default function ListEntry(props)  {

    const dispatch = useContext(FunctionContext)

    const buttonAdd = useRef([])
    const buttonDelete = useRef([])

    useEffect(()=>{
        if(props.buttonAction === 'add'){
            buttonDelete.current.classList.add('ListEntry__button-container--hidden')
        }
        if(props.buttonAction === 'delete'){
            buttonAdd.current.classList.add('ListEntry__button-container--hidden')
        }
    })


    return (
        <div className="ListEntry">
            <div className="ListEntry__container">
                <div className="ListEntry__button-container ListEntry__button-container--add" ref={buttonAdd}>
                    <button className="ListEntry__button ListEntry__button--add" name={props.verbName} onClick={()=> dispatch({type: ACTIONS.ADD, payload: {verb: props.verbName}})}>+</button>
                </div>
                <div className="ListEntry__button-container ListEntry__button-container--delete" ref={buttonDelete}>
                    <button className="ListEntry__button ListEntry__button--delete" name={props.verbName} onClick={()=> dispatch({type: ACTIONS.DELETE, payload: {verb: props.verbName}})}>-</button>
                </div>
                <div className="ListEntry__text-container">
                    <p className="ListEntry__text">{props.verbName}</p>
                </div>
            </div>
        </div>
    )
}