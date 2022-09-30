import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import UserLibrary from "../../Components/UserLibrary/UserLibrary";





export default function Database() {

    // const {verbLibrary} = useSelector((state)=> state.database)

    // console.log(verbLibrary)
    return (
        <>
            <div className="database">
                <h2 className="database__text">Database</h2>
                <div className="database__container">
                    <VerbLibrary />
                    <UserLibrary />
                </div>
            </div>
        </>
    )
};
