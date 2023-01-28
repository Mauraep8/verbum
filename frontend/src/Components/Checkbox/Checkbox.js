// import "./ListEntry.scss";
import { useDispatch } from "react-redux";
import { optionChecked} from "../../Store/exerciseSlice";
import { useState, useEffect } from "react";

function Checkbox(props)  {

    const [checked, setChecked] = useState()
    const dispatch = useDispatch()

    function toggle () {
        setChecked(!checked)
    }

    useEffect(()=>{
      toggle()
    },[])

    return (
        <div className="ListEntry_container">
            <input type="checkbox" defaultChecked={true} onClick={toggle} onChange={()=>{dispatch(optionChecked({value:props.optionValue, status:checked, category:props.optionCategory}))}} />
        </div>
    ) 
}
    
export default Checkbox;