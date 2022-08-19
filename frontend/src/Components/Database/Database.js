import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import UserLibrary from "../../Components/UserLibrary/UserLibrary";


function Database()  {

return (
    <>
    <div className="database">
        <h1>database</h1>
        <div className="database__container">
            <VerbLibrary/>
            <UserLibrary/>
        </div>
    </div>
    </>
    )
}

export default Database;