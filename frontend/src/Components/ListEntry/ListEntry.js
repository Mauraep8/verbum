import { useDispatch } from "react-redux";
import { verbAdded } from "../../Store/database";
import "./ListEntry.scss";




export default function ListEntry(props)  {

    // console.log(props)

    const dispatch = useDispatch()

    return (
        <div className="ListEntry">
            <div className="ListEntry__container">
                <div className="ListEntry__button-container ListEntry__button-container--add" >
                    <button className="ListEntry__button ListEntry__button--add" onClick={()=>{dispatch(verbAdded)}}>+</button>
                </div>
                <div className="ListEntry__button-container ListEntry__button-container--delete" >
                    <button className="ListEntry__button ListEntry__button--delete">-</button>
                </div>
                <div className="ListEntry__text-container">
                    <p className="ListEntry__text">{props.verbName}</p>
                </div>
            </div>
        </div>
    )
}