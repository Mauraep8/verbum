import React from 'react'
import "./PopupAction.scss";
import { useEffect, useRef } from "react";

export default function PopupAction(props) {
    
    const popupContainer = useRef([])

    useEffect(()=>{
        if(props.state.popupAction === 'added'){
            popupContainer.current.classList.add('popupAction--primary')
            popupContainer.current.classList.remove('popupAction--secondary')

        }
        if(props.state.popupAction  === 'removed'){
            popupContainer.current.classList.remove('popupAction--primary')
            popupContainer.current.classList.add('popupAction--secondary')
        }
    })

    if (props.state.length !== 0){
        return(
            <div className='popupAction' ref={popupContainer}>
                <p className="popupAction__text">{props.state.value} {props.state.popupAction}</p>
            </div>
        )       
    }
}
