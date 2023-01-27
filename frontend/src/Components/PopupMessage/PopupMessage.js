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

    if (props.messageError.length !==0) { 
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageError.feature} dropmenu is missing a checked option.</p>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
   } else if (props.messageWarning.length !==0) {
    if (props.messageWarning.verb === 'pleuvoir' ){
        if (props.messageWarning.verb === 'pleuvoir' && props.messageWarning.missingGender !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please check the one of the missing genders:</p>
                    <ul className='popup-message__list'>
                        <li className='popup-message__list-item'>{props.messageWarning.missingGender}</li> 
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } else if ( props.messageWarning.missingPerson !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please check one of the missing persons:</p>
                    <ul className='popup-message__list'>
                        <li className='popup-message__list-item'>{props.messageWarning.missingPerson}</li> 
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } else  if (props.messageWarning.missingMood !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please select one of the following moods:</p>
                    <ul className='popup-message__list'>
                        {props.messageWarning.missingMood.map((listMood) =>{
                            return <li className='popup-message__list-item'>{listMood}</li>
                        })}
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } else if (props.messageWarning.missingNumber !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please check one of the missing numbers:</p>
                    <ul className='popup-message__list'>
                        <li className='popup-message__list-item'>{props.messageWarning.missingNumber}</li> 
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        }
    } else if (props.messageWarning.verb !== null && props.messageWarning.missingPerson !== null){

        // clore
        if (props.messageWarning.mood !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb {props.messageWarning.verb} and the {props.messageWarning.mood} mood were selected, please check one of the missing persons:</p>
                    <ul className='popup-message__list'>
                        <li className='popup-message__list-item'>{props.messageWarning.missingPerson}</li> 
                    </ul>
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } else {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please check one of the missing persons:</p>
                <ul className='popup-message__list'>
                    <li className='popup-message__list-item'>{props.messageWarning.missingPerson}</li> 
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
        }
    } else if (props.messageWarning.verb !== null && props.messageWarning.missingTense !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb {props.messageWarning.verb} and the {props.messageWarning.mood} mood were selected, please check one of the following tenses:</p>
                <ul className='popup-message__list'>
                    {props.messageWarning.missingTense.map((listTense) =>{
                        return <li className='popup-message__list-item'>{listTense}</li>
                    })}
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
    } else if (props.messageWarning.verb !== null && props.messageWarning.missingNumber !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please check one of the missing numbers:</p>
                <ul className='popup-message__list'>
                    <li className='popup-message__list-item'>{props.messageWarning.missingNumber}</li> 
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
    } else if (props.messageWarning.verb !== null && props.messageWarning.missingMood !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb {props.messageWarning.verb} was selected, please select one of the following moods:</p>
                <ul className='popup-message__list'>
                    {props.messageWarning.missingMood.map((listMood) =>{
                        return <li className='popup-message__list-item'>{listMood}</li>
                    })}
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
    }
    else if (props.messageWarning.mood === 'impératif' && props.messageWarning.missingNumber === 'pluriel') {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.mood} mood and the {props.messageWarning.person} person were selected, please check one of the missing numbers:</p>
                <ul className='popup-message__list'>
                    <li className='popup-message__list-item'>{props.messageWarning.missingNumber}</li> 
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
    // clore
    }  else if (props.messageWarning.verb==='clore' && props.messageWarning.mood === 'impératif' && props.messageWarning.missingNumber === 'singulier') {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb {props.messageWarning.verb}, the {props.messageWarning.mood} mood and the {props.messageWarning.person} person were selected, please check one of the missing numbers:</p>
                <ul className='popup-message__list'>
                    <li className='popup-message__list-item'>{props.messageWarning.missingNumber}</li> 
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        ) 
    }else if (props.messageWarning.mood === 'impératif' && props.messageWarning.missingPerson !== null) {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.mood} mood was selected, please check one of the missing persons:</p>
                <ul className='popup-message__list'>
                {props.messageWarning.missingPerson.map((listPerson) =>{
                    return <li className='popup-message__list-item'>{listPerson}</li>
                })}
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            
            </div>
        )
    } else if (props.messageWarning.missingGender !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.person} person was selected, please check one of the missing genders:</p>
                <ul className='popup-message__list'>
                {props.messageWarning.missingGender.map((listGender) =>{
                    return <li className='popup-message__list-item'>{listGender}</li>
                })}
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            
            </div>
        )
    } else if(props.messageWarning.missingTense !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.mood} mood was selected, please check one of the missing tenses:</p>
                <ul className='popup-message__list'>
                {props.messageWarning.missingTense.map((listTense) =>{
                    return <li className='popup-message__list-item'>{listTense}</li>
                })}
                </ul>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            
            </div>
        )
    }
   }
}
