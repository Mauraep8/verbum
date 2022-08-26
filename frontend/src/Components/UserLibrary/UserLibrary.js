import "./UserLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import UserList from "../UserList/UserList";


export default function UserLibrary(props)  {

return (
    <>
    <div className="userLibrary">
        <div className="userLibrary__container">
            <h1 className="userLibrary__text">User Library</h1>
            <Searchbar/>
            <UserList verbList={props.verbList}/>
        </div>
    </div>
    </>
    )
}

