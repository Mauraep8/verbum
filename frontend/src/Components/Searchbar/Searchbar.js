import "./Searchbar.scss";
import { verbSearched } from "../../Store/databaseSlice";
import { useDispatch,useSelector } from "react-redux";
import { useRef, useEffect } from "react";



export default function Searchbar(props)  {
    
    const inputValue = useRef([])
    const dispatch = useDispatch()

    useEffect(()=>{
        if(props.searchInputState === null){
           inputValue.current.value = ''
        }
    })

    return (
        <div className="searchbar">
            <input ref={inputValue} className="searchbar__input" type="Search" placeholder="Search" onChange={(e)=>dispatch(verbSearched({value:e.target.value,component:props.type}))} />
            <i className="bi-search"></i>
        </div>
        )
    }

