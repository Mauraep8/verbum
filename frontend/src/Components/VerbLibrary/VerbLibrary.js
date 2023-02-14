import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";
import {useDispatch} from "react-redux"
import { verbListUpdateAction, verbListUpdated} from "../../Store/exerciseSlice";
import { submitClicked } from "../../Store/databaseSlice";
import { compareArray } from "../../Utils/compareArray";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import {useState, useRef, useEffect} from "react"

export default function VerbLibrary(props) {

    const [submitMessage, setSubmitMessage] = useState([])
    const popupContainer = useRef([])
    const dispatch = useDispatch()


    
    // useEffect(() => {
 
    
        const clickHandler = () => {

        const result = compareArray(props.exerciseVerbList, props.list)
        
            if (props.list.length === 0) { 
                // dispatch(submitClicked({message: 'User List is empty, please add verbs', popupAction: 'deleted'}))
                popupContainer.current.classList.remove('verbLibrary__popup-container--hidden')
                setSubmitMessage('User List is empty, add verbs to proceed')
                setSubmitMessage('The verb dropmenu has been updated')
                setTimeout(() => {
                    setSubmitMessage([])
                    popupContainer.current.classList.add('verbLibrary__popup-container--hidden')
                }, 2000);


            } else if(result===true){
                dispatch(verbListUpdated(props.list))
                dispatch(verbListUpdateAction(true))
                // dispatch(submitClicked({message: 'The verb dropmenu has been updated', popupAction: 'added'}))
                popupContainer.current.classLIst.remove('verbLibrary__popup-container--hidden')
                setSubmitMessage('The verb dropmenu has been updated')
                setTimeout(() => {
                    setSubmitMessage([])
                    popupContainer.current.classList.add('verbLibrary__popup-container--hidden')
                }, 2000);

            }
        }
    // }, [submitMessage])

    return (
        <div className="verbLibrary">
            <div className="verbLibrary__container">
                <h1 className="verbLibrary__header">{props.headerText}</h1>
                <p className="verbLibrary__text">{props.text}</p>
                <Searchbar type={props.type} searchInputState={props.searchInput}/>
                <VerbList list={props.list} search={props.search} actionType={props.actionType} popup={props.popup}/>
                <div className="verbLibrary__popup-container verbLibrary__popup-container--hidden" ref={popupContainer}>
                    <p className="verbLibrary__popup-text">{submitMessage}</p>
                </div>
                {props.button===true &&
                    <ButtonPrimary function={clickHandler} text={'Submit'}/>
                }
            </div>
        </div>
    )
}
