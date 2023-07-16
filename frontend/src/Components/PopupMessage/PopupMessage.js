import React, {useRef, useEffect} from 'react'
import "./PopupMessage.scss";
import { useDispatch } from "react-redux";
import { messageCleared } from "../../Store/exerciseSlice";

export default function PopupMessage(props) {

    const popupMessage = useRef([])

    useEffect(() => {
        if (props.messageError.action === true) {
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

    //drop menu missing an element
    if (props.messageError.length !==0) { 
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>{props.messageError}</p>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )

    // grammar rule, one element missing other conditions
    } else if (props.messageWarning.length !==0) {
        if(typeof props.messageWarning.element === 'string'){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The {props.messageWarning.element} was selected, please check one of the missing {props.messageWarning.missingType}:</p>
                    <ul className='popup-message__list'>
                    {props.messageWarning.missing.map((listItem) =>{
                        return <li className='popup-message__list-item'>{listItem}</li>
                    })}
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                
                </div>
            )
        } else {
            // grammar rule, two elements missing other conditions
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The {props.messageWarning.element[0]} and {props.messageWarning.element[1]} were selected, please check one of the missing {props.messageWarning.missingType}:</p>
                    <ul className='popup-message__list'>
                        {props.messageWarning.missing.map((listItem) =>{
                            return <li className='popup-message__list-item'>{listItem}</li>
                        })}
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        }
    }
}
