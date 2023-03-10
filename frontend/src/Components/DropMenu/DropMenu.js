import React, {useEffect, useRef, useState} from 'react'
import DropMenuButton from '../DropMenuButton/DropMenuButton'
import DropMenuList from '../DropMenuList/DropMenuList'
import "./DropMenu.scss";


export default function DropMenu(props) {

    const [isOpen, setIsOpen] = useState(false)

    
    const dropmenuWrapper = useRef ([])


    const optionClickHandler = (e) =>{
        e.stopPropagation()
        setIsOpen(true)        
    }


    
    const clickHandler = (button, e)=>{
        console.log(button.current)
        console.log(e.target)

        if (button.current && button.current.contains(e.target)){
            console.log('hello')
            setIsOpen(false)
        }
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    
    useEffect(() => {    
        if (isOpen){
            dropmenuWrapper.current.classList.remove('dropmenu__wrapper--hidden')
            dropmenuWrapper.current.classList.add('dropmenu__wrapper--visible')
    
        } else {
            dropmenuWrapper.current.classList.add('dropmenu__wrapper--hidden')
            dropmenuWrapper.current.classList.remove('dropmenu__wrapper--visible')
        }
    }, [isOpen])





    return (
        <div className='dropmenu'>
            <DropMenuButton type={props.type} result={props.result} colorChange={props.colorChange} function={clickHandler}/>
            <div className='dropmenu__wrapper dropmenu__wrapper--hidden' ref={dropmenuWrapper} >
                <DropMenuList list={props.list} type={props.type} function={optionClickHandler}/>
            </div>
        </div>
  )
}
