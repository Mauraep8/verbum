import React from 'react'
import './SubmitMessage.scss'

export default function SubmitMessage (props) {
    if (props.uploadClicked===true){
        return(
            <>
            <div className='submitMessage'>
                <p className="submitMessage__text">Submit Successful!</p>
            </div>
            </>
        )
    }
}