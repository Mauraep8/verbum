import React, {useRef, useEffect} from 'react'
import "./PopupMessage.scss";

export default function PopupMessage(props) {

    const popupMessage = useRef([])

    useEffect(() => {
        if (props.message.action === true){
            popupMessage.current.classList.remove('popup-message--hidden')
            popupMessage.current.classList.add('popup-message--active')
        }
    })
    
    const clickHandler = () => {
            console.log(popupMessage.current.classList.value)

            popupMessage.current.classList.remove('popup-message--active')
            popupMessage.current.classList.add('popup-message--hidden')
        
    }

    console.log(props.message.feature)
    console.log(props)
    if(props.message.length !==0){ 
        return (
        <div className='popup-message' ref={popupMessage}>
            <p>{props.message.feature} dropdown is missing a checked option. Please check an option</p>
            <button className='popup-message__button' onClick={clickHandler}>x</button>
        </div>
        )
   }
}
