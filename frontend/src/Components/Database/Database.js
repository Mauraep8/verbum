import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
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
  const popupActionAdded = useSelector((state)=> state.database.popupActionAdded) 
  const popupActionRemoved = useSelector((state)=> state.database.popupActionRemoved) 

  const dispatch = useDispatch()

  let prevPopupState = useRef([])

  useEffect(() => {

    if (popupActionAdded.length !== 0 || popupActionRemoved.length !== 0) {
      
      //if Added state is not empty
      if(popupActionAdded.length !== 0)

      //capture prev state
      prevPopupState.current = popupActionAdded
      
      //set new state of popup prop
      popupSetStateAdded(popupActionAdded)

      // if after 1.5 sec prevState and currentState are the same (no changes) then close popup
      setTimeout(() => {
        if (prevPopupState.current === popupActionAdded){
          dispatch(popupClosed({popupType: 'added'}))
        }
      }, 1500);

    if(popupActionRemoved.length !== 0)
      
      prevPopupState.current = popupActionRemoved
      popupSetStateRemoved(popupActionRemoved)
      
      setTimeout(() => {
        if (prevPopupState.current === popupActionRemoved){
          dispatch(popupClosed({popupType: 'removed'}))
        }
      }, 1500);

    } else {
      popupSetStateAdded(popupActionAdded)
      popupSetStateRemoved(popupActionAdded)
    }
  }, [popupActionAdded, popupActionRemoved])


  return (
    <div className="database">
      <div className="database__main-container">
        <h2 className="database__header">Edit Verb List</h2>
        <p>Add or remove verbs to change</p>
        <div className="database__container">
          <VerbLibrary
            headerText={"Available Verbs"}
            // text={'Add verbs from the library to your user list.'}
            searchInput={searchVerbInput}
            list={verbLibrary}
            search={searchVerbLibrary}
            actionType={"add"}
            type={'verbLibrary'}
            button={false}
            popup={popupStateAdded}
          />
          {/* <div className="database__icon-container database__icon-container--mobile">
            <i className="bi-chevron-double-down"></i>       
          </div> */}
          <div className="database__icon-container database__icon-container--tablet">
            <i className="bi-chevron-double-right"></i>     
            <i className="bi-chevron-double-left"></i>  
          </div>
          <VerbLibrary
            headerText={"Selected Verbs"}
            // text={'Refine study list by removing verbs. Click submit to see changes in the exercise.'}
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
