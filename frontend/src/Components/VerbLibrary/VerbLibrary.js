import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";


function VerbLibrary()  {

return (
    <>
    <div className="verbLibrary">
        <div className="verbLibrary__container">
            <h1 className="verbLibrary__text">VerbLibrary</h1>
            <Searchbar/>
            <VerbList/>
        </div>
    </div>
    </>
    )
}

export default VerbLibrary;