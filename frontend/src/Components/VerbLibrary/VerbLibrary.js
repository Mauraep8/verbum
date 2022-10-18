import "./VerbLibrary.scss";
import Searchbar from "../Searchbar/Searchbar";
import VerbList from "../VerbList/VerbList";
import {useSelector} from 'react-redux'

export default function VerbLibrary()  {

const {verbLibrary, searchVerbLibrary} = useSelector((state)=> state.database)

return (
    <div className="verbLibrary">
        <div className="verbLibrary__container">
            <h1 className="verbLibrary__text">Verb Library</h1>
            <Searchbar type='verbLibrary'/>
            <VerbList list={verbLibrary} search={searchVerbLibrary}/>
        </div>
    </div>
    )
}
