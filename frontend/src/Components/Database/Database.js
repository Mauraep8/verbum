import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import UserLibrary from "../../Components/UserLibrary/UserLibrary";
import PopupAction from "../PopupAction/PopupAction";
import {useSelector} from 'react-redux'


export default function Database() {

    // const {popupAction} = useSelector((state)=> state.database)
    // console.log(popupAction)

    return (
        <>
            <div className="database">
                <h2 className="database__text">Database</h2>
                <PopupAction/>
                {/* <div className="database__popupContainer">
                    <p></p>    
                </div> */}
                <div className="database__container">
                    <VerbLibrary />
                    <UserLibrary />
                </div>
            </div>
        </>
    )
};
