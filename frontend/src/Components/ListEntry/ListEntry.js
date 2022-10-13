import { useDispatch } from "react-redux";
import { verbAdded, verbDeleted } from "../../Store/databaseSlice";
import { useEffect, useRef} from "react";
import "./ListEntry.scss";


export default function ListEntry(props)  {

    const dispatch = useDispatch()

    // console.log(props)
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
                    <button className="ListEntry__button ListEntry__button--add" onClick={()=>{dispatch(verbAdded({verbName:props.verbName,id:props.id,verbGroup:props.verbGroup,bescherelleId:props.bescherelleId,primaryVerb:props.primaryVerb,specialVerb:props.specialVerb,auxiliaryVerb:props.auxiliaryVerb,key:props.id,initialVerb:props.initialVerb}))}}>+</button>
                </div>
                <div className="ListEntry__button-container ListEntry__button-container--delete"ref={buttonDelete}>
                    <button className="ListEntry__button ListEntry__button--delete"onClick={()=>{dispatch(verbDeleted({verbName:props.verbName,id:props.id,verbGroup:props.verbGroup,bescherelleId:props.bescherelleId,primaryVerb:props.primaryVerb,specialVerb:props.specialVerb,auxiliaryVerb:props.auxiliaryVerb,key:props.id,initialVerb:props.initialVerb}))}}>-</button>
                </div>
                <div className="ListEntry__text-container">
                    <p className="ListEntry__text">{props.verbName}</p>
                </div>
            </div>
        </div>
    )
}