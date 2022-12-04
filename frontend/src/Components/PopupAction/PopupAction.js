import React from 'react'
import "./PopupAction.scss";
import { useEffect, useRef } from "react";

export default function PopupAction(props) {
    
    const popupContainer = useRef([])
//    console.log(props.state)

    useEffect(()=>{
        if(props.state.popupAction === 'added'){
            popupContainer.current.classList.add('popupAction--primary')
            popupContainer.current.classList.remove('popupAction--secondary')

        }
        if(props.state.popupAction  === 'deleted'){
            popupContainer.current.classList.remove('popupAction--primary')
            popupContainer.current.classList.add('popupAction--secondary')
        }
    })

    if (props.state.length !== 0 ){
        if (typeof props.state.verbName === 'string' ) {
            return(
                <div className='popupAction' ref={popupContainer}>
                    <p className="popupAction__text">{props.state.verbName} has been {props.state.popupAction}</p>
                </div>
            )
        } else if (typeof props.state.message === 'string'){
            return(
                <div className='popupAction' ref={popupContainer}>
                    <p className="popupAction__text">{props.state.message}</p>
                </div>
            )
        }

    }
  
}
