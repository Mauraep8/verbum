import "./UserLibrary.scss";
import { useDispatch } from "react-redux";
import Searchbar from "../Searchbar/Searchbar";
import UserList from "../UserList/UserList";
import {useSelector} from "react-redux"
import { verbListUpdateAction, verbListUpdated} from "../../Store/exerciseSlice";
import { submitClicked } from "../../Store/databaseSlice";
import { compareArray } from "../../Utils/compareArray";



export default function UserLibrary()  {

const exerciseVerbList = useSelector(((state)=> state.exercise.verbListState))
const userLibrary = useSelector(((state)=> state.database.userLibrary))
const searchUserLibrary = useSelector(((state)=> state.database.searchUserLibrary))
const searchUserInput = useSelector(((state)=> state.database.searchUserInput))


const dispatch = useDispatch()

const clickHandler = () =>{

    const result = compareArray(exerciseVerbList, userLibrary)
    
    if (userLibrary.length === 0) { 
        dispatch(submitClicked({message: 'User List is empty, please add verbs', popupAction: 'deleted'}))



    } else if(result===true){
        dispatch(verbListUpdated(userLibrary))
        dispatch(verbListUpdateAction(true))
        dispatch(submitClicked({message: 'The verb dropmenu has been updated', popupAction: 'added'}))
    }
}

return (
    <>
    <div className="userLibrary">
        <div className="userLibrary__container">
            <h1 className="userLibrary__text">User List</h1>
            <Searchbar type='userLibrary' searchInputState={searchUserInput}/>
            <UserList list={userLibrary} search={searchUserLibrary}/>
            <div className="verbList__button-container">
                <button className='verbList__button'onClick={clickHandler}>Submit</button>
            </div>
        </div>
    </div>
    </>
    )
}

