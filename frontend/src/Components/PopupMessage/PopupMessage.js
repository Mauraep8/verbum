import React, {useRef, useEffect} from 'react'
import "./PopupMessage.scss";
import { useDispatch } from "react-redux";
import { messageCleared } from "../../Store/exerciseSlice";

export default function PopupMessage(props) {

    const popupMessage = useRef([])

    useEffect(() => {
        if (props.message.action === true) {
            popupMessage.current.classList.remove('popup-message--hidden')
            popupMessage.current.classList.add('popup-message--active')
        }
    })

    const dispatch = useDispatch()     
    
    const clickHandler = () => {

        popupMessage.current.classList.remove('popup-message--active')
        popupMessage.current.classList.add('popup-message--hidden')
        dispatch(messageCleared([]))
    }

    if (props.message.length !==0) { 
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.message.feature} dropdown is missing a checked option. Please check an option</p>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
   }
}
