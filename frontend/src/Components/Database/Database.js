import "./Database.scss";
import VerbLibrary from "../../Components/VerbLibrary/VerbLibrary";
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect, useRef } from "react";
import { popupClosed, closeDatabase } from "../../Store/databaseSlice";

export default function Database(props) {

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
  const databaseState = useSelector((state) => state.database.databaseState)


  const dispatch = useDispatch()

  let prevPopupState = useRef([])
  const databaseDiv = useRef([])
console.log(databaseState)
  useEffect(() => {
    if(databaseState.length === 0 || databaseState.value === false){
      console.log('hello')
      databaseDiv.current.classList.add('database--hidden')
      databaseDiv.current.classList.remove('database--active')

    } else if (databaseState.value === true){
      console.log('goodbye')
      console.log(databaseState)
      databaseDiv.current.classList.remove('database--hidden')
      databaseDiv.current.classList.add('database--active')
    }

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
  }, [databaseState, popupActionAdded, popupActionRemoved])


  return (
    <div className="database" ref={databaseDiv}>
      <div className="database__main-container">
         {/* <button className="database__button" onClick={()=>{dispatch(closeDatabase({value:false}))}}>X</button> */}
        {/* <h2 className="database__header">Edit Verb List</h2> */}
        <p className="database__text"><span className="database__text--bold">add/remove</span> to change current verbs in the exercise and <span className="database__text--bold">Save</span> changes.</p>
        <div className="database__container">
          <VerbLibrary
            headerText={"Available Verbs"}
            searchInput={searchVerbInput}
            list={verbLibrary}
            search={searchVerbLibrary}
            actionType={"add"}
            type={'verbLibrary'}
            button={false}
            popup={popupStateAdded}
          />
          <div className="database__icon-container database__icon-container--tablet">
            <i className="bi-chevron-double-right"></i>     
            <i className="bi-chevron-double-left"></i>  
          </div>
          <VerbLibrary
            headerText={"Current Verbs"}
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
