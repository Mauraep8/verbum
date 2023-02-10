import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import PopupAction from "../PopupAction/PopupAction";
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect, useRef } from "react";
import { popupClosed } from "../../Store/databaseSlice";




export default function Database() {

  const [popupStateAdded, popupSetStateAdded] = useState([])
  const [popupStateRemoved, popupSetStateRemoved] = useState([])

  const exerciseVerbList = useSelector(((state)=> state.exercise.verbListState))
  const userLibrary = useSelector(((state)=> state.database.userLibrary))
  const searchUserLibrary = useSelector(((state)=> state.database.searchUserLibrary))
  const searchUserInput = useSelector(((state)=> state.database.searchUserInput))
  const searchVerbInput = useSelector((state)=> state.database.searchVerbInput)
  const verbLibrary = useSelector((state)=> state.database.verbLibrary)
  const searchVerbLibrary = useSelector((state)=> state.database.searchVerbLibrary)
  
  // const popupActionAdded = useSelector((state)=> state.database.popupActionAdded) 
  // const popupActionRemoved = useSelector((state)=> state.database.popupActionRemoved) 
  const popupAction = useSelector((state)=> state.database.popupAction) 

  const dispatch = useDispatch()
  // console.log(popupAction)
  let prevPopupState = useRef([])
  useEffect(() => {
    if (popupAction.length !== 0) {
      
 
    prevPopupState.current = popupAction


    if(popupAction.popupAction === 'added')

      popupSetStateAdded(popupAction)

      setTimeout(() => {
        if (prevPopupState.current === popupAction){
          dispatch(popupClosed([]))
        }
      }, 1500);

    if(popupAction.popupAction === 'removed')

      popupSetStateRemoved(popupAction)
      
      setTimeout(() => {
        if (prevPopupState.current === popupAction){
          dispatch(popupClosed([]))
        }
      }, 1500);

    } else {
      popupSetStateAdded(popupAction)
      popupSetStateRemoved(popupAction)
    }
  }, [popupAction])





  return (
    <div className="database">
      <div className="database__main-container">
        <h2 className="database__header">Database</h2>
        <div className="database__container">
          <VerbLibrary
            headerText={"Verb Library"}
            text={'Add verbs from the library to your user list.'}
            searchInput={searchVerbInput}
            list={verbLibrary}
            search={searchVerbLibrary}
            actionType={"add"}
            type={'verbLibrary'}
            button={false}
            popup={popupStateAdded}
          />
          <div className="database__icon-container">
            <i className="bi-chevron-double-down"></i>       
          </div>
          <VerbLibrary
            headerText={"User List"}
            text={'Refine study list by removing verbs. Click submit to see changes in the exercise.'}
            searchInput={searchUserInput}
            list={userLibrary}
            search={searchUserLibrary}
            actionType={"remove"}
            exerciseVerbList={exerciseVerbList}
            type={'userLibrary'}
            button={true}
            popup={popupStateRemoved}
          />
        </div>
      </div>
    </div>
  );
};
