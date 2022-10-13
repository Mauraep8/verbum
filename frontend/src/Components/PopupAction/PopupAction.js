import React from 'react'
import {useSelector} from 'react-redux'


export default function PopupAction() {

    const {popupAction} = useSelector((state)=> state.database)
    console.log(popupAction) 

    if (popupAction.length !== 0){
        return(
            <>
            <div className='popupAction'>
                <p className="popupAction__text">{popupAction.verbName} has been {popupAction.popupAction}.</p>
            </div>
            </>
        )
    }
}
