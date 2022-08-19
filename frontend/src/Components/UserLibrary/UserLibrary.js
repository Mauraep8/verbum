import "./UserLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";


function UserLibrary()  {

return (
    <>
    <div className="userLibrary">
        <div className="userLibrary__container">
            <h1 className="userLibrary__text">UserLibrary</h1>
            <Searchbar/>
            <VerbList/>
        </div>
    </div>
    </>
    )
}

export default UserLibrary;