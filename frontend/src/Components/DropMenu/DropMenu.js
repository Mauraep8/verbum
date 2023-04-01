import React, {useEffect, useRef, useState} from 'react'
import DropMenuButton from '../DropMenuButton/DropMenuButton'
import DropMenuList from '../DropMenuList/DropMenuList'
import "./DropMenu.scss";



export default function DropMenu(props) {

    const [showDropmenu, setShowDropmenu] = useState(false)
    const buttonRef = useRef(null)

    useEffect(() => {
      const handler = (e) => {        
        if (buttonRef.current && !buttonRef.current.contains(e.target)){
        setShowDropmenu(false)
    }}

      window.addEventListener('click', handler)
    
      return () => {
        window.removeEventListener('click', handler)
      }
    })

    const handleInputClick = () => {
        setShowDropmenu(!showDropmenu)
    }
    
    return (
        <div className='dropmenu'>
            <DropMenuButton type={props.type} result={props.result} ref={buttonRef} colorChange={props.colorChange} function={handleInputClick}/>
            {showDropmenu && <div className='dropmenu__menu'>
                <DropMenuList list={props.list} type={props.type}/>
            </div>}
        </div>
  )
}
