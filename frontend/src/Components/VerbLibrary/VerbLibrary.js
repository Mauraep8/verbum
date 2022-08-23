import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";

export default function VerbLibrary(props)  {

return (
    <div className="verbLibrary">
        <div className="verbLibrary__container">
            <h1 className="verbLibrary__text">VerbLibrary</h1>
            <Searchbar/>
            <VerbList/>
        </div>
    </div>
    )
}
