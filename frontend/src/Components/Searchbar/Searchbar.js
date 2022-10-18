import "./Searchbar.scss";
import { verbSearched } from "../../Store/databaseSlice";
import { useDispatch,useSelector } from "react-redux";
import { useRef, useEffect } from "react";



export default function Searchbar(props)  {
    
    const {searchVerbLibrary, searchUserLibrary} = useSelector((state)=> state.database)
    const dispatch = useDispatch()
    
    console.log(searchVerbLibrary)
    const inputValue = useRef([])

    useEffect(()=>{
        if (searchVerbLibrary.length === 0){
            inputValue.current.value = ''
        } 
        if  (searchUserLibrary.length === 0){
            inputValue.current.value = ''
        }
    },[])

    return (
        <>
        <div className="searchbar">
            <input className="searchbar__input" type="Search" placeholder="Search..." onChange={(e)=>dispatch(verbSearched({value:e.target.value,component:props.type}))} ref={inputValue}/>
        </div>
        </>
        )
    }

