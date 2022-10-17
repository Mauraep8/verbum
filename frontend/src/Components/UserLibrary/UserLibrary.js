import "./UserLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import UserList from "../UserList/UserList";
import {useSelector} from "react-redux"


export default function UserLibrary()  {

const {userLibrary} = useSelector((state)=> state.database)

return (
    <>
    <div className="userLibrary">
        <div className="userLibrary__container">
            <h1 className="userLibrary__text">User List</h1>
            <Searchbar/>
            <UserList list={userLibrary}/>
        </div>
    </div>
    </>
    )
}

