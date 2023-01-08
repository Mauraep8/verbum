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
                <p className='popup-message__text'>The {props.messageError.feature} dropmenu is missing a checked option. Please check an option to proceed</p>
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
   } else if (props.messageWarning.length !==0) {
    if (props.messageWarning.verb === 'pleuvoir' ){
        if (props.messageWarning.verb === 'pleuvoir' && props.messageWarning.missingGender !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb '{props.messageWarning.verb}' was chosen without the appropriate gender case. Please select the following in the Gender dropmenu to proceed:</p>
                    <li>{props.messageWarning.missingGender}</li> 
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } else if ( props.messageWarning.missingPerson !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb '{props.messageWarning.verb}' was chosen without the appropriate person case. Please select the following in the Person dropmenu to proceed:</p>
                    <li>{props.messageWarning.missingPerson}</li> 
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } 
    } else if (props.messageWarning.verb !== null && props.messageWarning.missingPerson !== null){

        // clore
        if (props.messageWarning.mood !== null){
            return (
                <div className='popup-message' ref={popupMessage}>
                    <p className='popup-message__text'>The verb '{props.messageWarning.verb}' and the '{props.messageWarning.mood}' mood were chosen without the appropriate person case. Please select the following in the Person dropmenu to proceed:</p>
                    <li>{props.messageWarning.missingPerson}</li> 
                    <button className='popup-message__button' onClick={clickHandler}>x</button>
                </div>
            )
        } else {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb '{props.messageWarning.verb}' was chosen without the appropriate person case. Please select the following in the Person dropmenu to proceed:</p>
                <li>{props.messageWarning.missingPerson}</li> 
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
        }
    } else if (props.messageWarning.verb !== null && props.messageWarning.missingTense !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb '{props.messageWarning.verb}' and the '{props.messageWarning.mood}' mood were chosen without the appropriate tense cases. Please select one of the following in the Tense dropmenu to proceed:</p>
                {props.messageWarning.missingTense.map((listTense) =>{
                    return <li>{listTense}</li>
                })}
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
    }
    else if (props.messageWarning.mood === 'impératif' && props.messageWarning.missingNumber === 'pluriel') {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The '{props.messageWarning.mood}' mood and the '{props.messageWarning.person}' person were chosen without the appropriate number case. Please select the following in the Number dropmenu to proceed:</p>
                <li>{props.messageWarning.missingNumber}</li> 
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        )
    // clore
    }  else if (props.messageWarning.verb==='clore' && props.messageWarning.mood === 'impératif' && props.messageWarning.missingNumber === 'singulier') {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The verb '{props.messageWarning.verb}', the '{props.messageWarning.mood}' mood and the '{props.messageWarning.person}' person were chosen without the appropriate number case. Please select the following in the Number dropmenu to proceed:</p>
                <li>{props.messageWarning.missingNumber}</li> 
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            </div>
        ) 
    }else if (props.messageWarning.mood === 'impératif' && props.messageWarning.missingPerson !== null) {
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.mood} mood was selected without the appropriate person cases. Please select at least one of the following in the Person dropmenu to proceed:</p>
                {props.messageWarning.missingPerson.map((listPerson) =>{
                    return <li>{listPerson}</li>
                })}
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            
            </div>
        )
    } else if (props.messageWarning.missingGender !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.person} person was selected without the appropriate gender cases. Select at least one of the following in the Gender dropmenu to proceed:</p>
                {props.messageWarning.missingGender.map((listGender) =>{
                    return <li>{listGender}</li>
                })}
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            
            </div>
        )
    } else if(props.messageWarning.missingTense !== null){
        return (
            <div className='popup-message' ref={popupMessage}>
                <p className='popup-message__text'>The {props.messageWarning.mood} mood was selected without the appropriate tenses. Please select at least one of the following in the Tense dropmenu to proceed:</p>
                {props.messageWarning.missingTense.map((listTense) =>{
                    return <li>{listTense}</li>
                })}
                <button className='popup-message__button' onClick={clickHandler}>x</button>
            
            </div>
        )
    }
   }
}
