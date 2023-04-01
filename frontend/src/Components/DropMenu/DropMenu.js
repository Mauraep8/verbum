import React, {useEffect, useRef, useState} from 'react'
import DropMenuButton from '../DropMenuButton/DropMenuButton'
import DropMenuList from '../DropMenuList/DropMenuList'
import {useDispatch} from 'react-redux'
import "./DropMenu.scss";
import { shuffleCleared } from '../../Store/exerciseSlice';



export default function DropMenu(props) {

    const [showDropmenu, setShowDropmenu] = useState(false)
    const buttonRef = useRef(null)
    const menuRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
      const handler = (e) => {        
        if (buttonRef.current && !buttonRef.current.contains(e.target)){
        setShowDropmenu(false)

    }}

    if (showDropmenu===true){
        menuRef.current.classList.add('dropmenu__menu--visible')
        menuRef.current.classList.remove('dropmenu__menu--hidden')
        dispatch(shuffleCleared())
    } else {
        menuRef.current.classList.remove('dropmenu__menu--visible')
        menuRef.current.classList.add('dropmenu__menu--hidden')
        dispatch(shuffleCleared())
    }

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
            <div className='dropmenu__menu' ref={menuRef}>
                <DropMenuList list={props.list} type={props.type}/>
            </div>
        </div>
  )
}
