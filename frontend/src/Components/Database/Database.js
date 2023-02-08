import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import PopupAction from "../PopupAction/PopupAction";
import {useSelector} from 'react-redux'
import { useState, useEffect } from "react";
import VerbListContainer from "../VerbLibrary/VerbLibrary";


export default function Database() {

const exerciseVerbList = useSelector(((state)=> state.exercise.verbListState))
const userLibrary = useSelector(((state)=> state.database.userLibrary))
const searchUserLibrary = useSelector(((state)=> state.database.searchUserLibrary))
const searchUserInput = useSelector(((state)=> state.database.searchUserInput))
const searchVerbInput = useSelector((state)=> state.database.searchVerbInput)
const verbLibrary = useSelector((state)=> state.database.verbLibrary)
const searchVerbLibrary = useSelector((state)=> state.database.searchVerbLibrary)


      
   const [state, setState] = useState([])
   const {popupAction} = useSelector((state)=> state.database) 
//    console.log(popupAction)
    
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
            <h2 className="database__header">Database</h2>
            <div className="database__popup-container">
              <PopupAction state={state} />
            </div>
            <div className="database__container">
              <VerbLibrary
                headerText={"Verb Library"}
                searchInput={searchVerbInput}
                list={verbLibrary}
                search={searchVerbLibrary}
                actionType={"add"}
                type={'verbLibrary'}
                button={false}
              />
              <div className="database__icon-container">
                <i class="bi-chevron-double-down"></i>       
              </div>
              <VerbLibrary
                headerText={"User List"}
                searchInput={searchUserInput}
                list={userLibrary}
                search={searchUserLibrary}
                actionType={"remove"}
                exerciseVerbList={exerciseVerbList}
                type={'userLibrary'}
                button={true}
              />
            </div>
          </div>
        </div>
      </>
    );
};
