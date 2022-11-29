import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import UserLibrary from "../../Components/UserLibrary/UserLibrary";
import PopupAction from "../PopupAction/PopupAction";
import {useSelector} from 'react-redux'
import { useState, useEffect } from "react";


export default function Database() {

      
   const [state, setState] = useState([])
   const {popupAction} = useSelector((state)=> state.database) 
    
    useEffect(() => {
        setState(popupAction)
        setTimeout(() => {
            setState([])
        }, 2500);
    }, [popupAction])

    return (
        <>
            <div className="database">
                <div className="database__main-container">
                    <h2 className="database__text">Database</h2>
                    <div className="database__popup-container">
                        <PopupAction state={state}/>
                    </div>
                    <div className="database__container">
                        <VerbLibrary />
                        <UserLibrary />
                    </div>
                </div>
            </div>
        </>
    )
};
