import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";

export default function VerbLibrary(props)  {

return (
    <div className="verbLibrary">
        <div className="verbLibrary__container">
            <h1 className="verbLibrary__text">Verb Library</h1>
            <Searchbar/>
            <VerbList newVerbList={props.newVerbList}/>
        </div>
    </div>
    )
}
