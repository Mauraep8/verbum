import "./Searchbar.scss";
import { verbSearched } from "../../Store/databaseSlice";
import { useDispatch } from "react-redux";



export default function Searchbar()  {

    const dispatch = useDispatch()

    return (
        <>
        <div className="searchbar">
            <input className="searchbar__input" type="Search" placeholder="Search..." onChange={(e)=>dispatch(verbSearched(e.target.value))}/>
        </div>
        </>
        )
    }

