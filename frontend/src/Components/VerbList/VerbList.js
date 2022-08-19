import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

function VerbList()  {

return (
    <>
    <div className="verbList">
        <div className="verbList__container">
            <h1 className="verbList__text" >VerbList container</h1>
            <ListEntry/>
        </div>
    </div>
    </>
    )
}

export default VerbList;