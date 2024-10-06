import "./DatabaseButton.scss";
import {openDatabase} from "../../Store/databaseSlice"
import { useDispatch } from "react-redux";


export default function DatabaseButton() {

 const dispatch = useDispatch()  
  return (
    <div className="databaseButton">
      <button className="databaseButton__button" onClick={()=>{dispatch(openDatabase({value:true}))}}>
        <i className="bi-pencil-square"></i>
      </button>
    </div>
  );
}
