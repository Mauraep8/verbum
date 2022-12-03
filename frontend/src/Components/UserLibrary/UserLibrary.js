import "./UserLibrary.scss";
import { useDispatch } from "react-redux";
import Searchbar from "../Searchbar/Searchbar";
import UserList from "../UserList/UserList";
import {useSelector} from "react-redux"
import { verbListUpdated} from "../../Store/exerciseSlice";



export default function UserLibrary()  {

const {userLibrary, searchUserLibrary, searchUserInput} = useSelector((state)=> state.database)

const dispatch = useDispatch()

const clickHandler = () =>{
    if (userLibrary.length === 0) {
        console.log('empty')   
    } else{
        dispatch(verbListUpdated(userLibrary))
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

