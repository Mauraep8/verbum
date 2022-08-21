import "./UserLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
// import VerbList from "../VerbList/VerbList";


function UserLibrary(props)  {


console.log(props)
return (
    <>
    <div className="userLibrary">
        <div className="userLibrary__container">
            <h1 className="userLibrary__text">UserLibrary</h1>
            <Searchbar/>
            {/* <VerbList/> need to use a new componene called userLIst */}
        </div>
    </div>
    </>
    )
}

export default UserLibrary;