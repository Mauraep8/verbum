import "./ListEntry.scss";
import Checkbox from "../Checkbox/Checkbox";

function ListEntry()  {

return (
    <>
    <div className="ListEntry">
        <div className="ListEntry__container">
            <Checkbox/>
            <div className="ListEntry__text-container">
                <p className="ListEntry__text">a verb</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default ListEntry;