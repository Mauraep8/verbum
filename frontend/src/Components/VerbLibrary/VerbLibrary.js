import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import PopupAction from "../PopupAction/PopupAction";
import VerbList from "../VerbList/VerbList";
import {useDispatch, useSelector} from "react-redux"
import { verbListUpdateAction, verbListUpdated} from "../../Store/exerciseSlice";
import { submitClicked } from "../../Store/databaseSlice";
import { compareArray } from "../../Utils/compareArray";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import {useState, useRef, useEffect} from "react"

export default function VerbLibrary(props) {

    const [message, setMessage] = useState([])
    const submitMessage = useSelector(((state)=> state.database.submitMessage))
    const dispatch = useDispatch()

    const verbLibraryText = useRef([])

    // VerbLibrary is misaligned bc userlist has more text in tablet mode
    useEffect(() => {
        if(props.button===false){
            verbLibraryText.current.classList.add('verbLibrary__text--tablet')
        }
    }, [props.button])

    const clickHandler = () => {

        // if exerciseVerbList is the same as the userList, return true or false
        const comparisonResult = compareArray(props.exerciseVerbList, props.list)

            // if userList empty, dispatch warning message
            if (props.list.length === 0) { 
                dispatch(submitClicked({message: 'User List is empty, please add verbs'}))
                setTimeout(() => {
                    dispatch(submitClicked({message: ''}))
                }, 2000);
            
            // if userList is diff from exerciseVerbList, dispatch success message
            } else if(comparisonResult === true){
                dispatch(verbListUpdated(props.list))
                dispatch(verbListUpdateAction(true))
                dispatch(submitClicked({message: 'The verb dropmenu has been updated'}))
                setTimeout(() => {
                    dispatch(submitClicked({message: ''}))
                }, 2000);
            }
    }
    
    useEffect(() => {
        setMessage(submitMessage)
    }, [submitMessage])
    
    return (
        <div className="verbLibrary">
            <div className="verbLibrary__container">
                <h1 className="verbLibrary__header">{props.headerText}</h1>
                <p className="verbLibrary__text" ref={verbLibraryText}>{props.text}</p>
                <Searchbar type={props.type} searchInputState={props.searchInput}/>
                <VerbList list={props.list} search={props.search} actionType={props.actionType}/>
                <div className="verbLibrary__popup-container--secondary">
                    <PopupAction state={props.popup}/>
                </div>
                {props.button === true &&
                    <div className="verbLibrary__popup-container">
                        <p className="verbLibrary__popup-text">{message}</p>
                    </div>
                }            
                {props.button === true &&
                    <ButtonPrimary function={clickHandler} text={'Submit'}/>
                }
            </div>
        </div>
    )
}
