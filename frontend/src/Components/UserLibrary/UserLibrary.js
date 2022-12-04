import "./UserLibrary.scss";
import { useDispatch } from "react-redux";
import Searchbar from "../Searchbar/Searchbar";
import UserList from "../UserList/UserList";
import {useSelector} from "react-redux"
import { verbListUpdated} from "../../Store/exerciseSlice";
import { submitClicked } from "../../Store/databaseSlice";



export default function UserLibrary()  {

const {userLibrary, searchUserLibrary, searchUserInput} = useSelector((state)=> state.database)

const dispatch = useDispatch()

const clickHandler = () =>{
    if (userLibrary.length === 0) {
        console.log('empty')   
        dispatch(submitClicked({message: 'User List is empty, please add verbs', popupAction: 'deleted'}))

    } else{
        dispatch(verbListUpdated(userLibrary))
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

