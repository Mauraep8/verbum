import React, {useEffect, useState} from 'react'
import {useSelector } from 'react-redux';
import './GrammarFeature.scss'
import DropMenu from '../DropMenu/DropMenu';


export default function GrammarFeature(props) {
    
  const [buttonText, setButtonText] = useState([])

  const verbListApprovedUpdate = useSelector((state)=> state.exercise.verbListApprovedUpdate) 

  useEffect(() => {

    // initial render, shuffle has not occurred or verbList has been updated
    if((props.shuffleState === undefined || props.shuffleState.length === 0) || verbListApprovedUpdate === true ){
      setButtonText(props.option[0].value)    

      // shuffle has occurred
    } else {
      setButtonText(props.shuffleState.result.value)
    }

  }, [props.option, props.shuffleState])

  return (
    <div className='GrammarFeature'>
      <div className='grammarFeature__container' >
        <DropMenu type={props.type} result={buttonText} colorChange={props.shuffleState.colorChange} list={props.option}/>
      </div>
    </div>
  )
}
