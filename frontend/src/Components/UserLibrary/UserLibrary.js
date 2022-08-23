import "./UserLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import UserList from "../UserList/UserList";


function UserLibrary(props)  {

console.log(props.verbList)

return (
    <>
    <div className="userLibrary">
        <div className="userLibrary__container">
            <h1 className="userLibrary__text">UserLibrary</h1>
            <Searchbar/>
            <UserList verbList={props.verbList}/>
        </div>
    </div>
    </>
    )
}

export default UserLibrary;