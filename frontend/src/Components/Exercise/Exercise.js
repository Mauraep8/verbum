import React from 'react'
import Verb from '../Verb/Verb'
import Grammar from '../Grammar/Grammar'
import Answer from '../Answer/Answer'


import './Exercise.scss'

export default function Exercice() {

  const personArray = [{option:'1er'},{option:'2eme'},{option:'3eme'}]
  const genderArray = [{option:'feminin'}, {option:'masculin'},{option:'none'}]
  const numberArray = [{option:'singulier'},{option:'pluriel'}]
  const tenseArray = [{option:'present'},{option:'passe compose'},{option:'imparfait'},{option:'plus-que-parfait'},{option:'passe simple'},{option:'passe anterieur'},{option:'futur simple'},{option:'futur anterieur'}]
  const moodArray = [{option:'indicatif'},{option:'subjonctif'},{option:'imperatif'},{option:'conditionnel'}]



  return (
      <div className='exercise'>
        <div className='exercise__main-container'>
          <h2 className='exercise__header'>Exercise</h2>
          <div className='exercise__wrapper'>
            <div className='exercise__grammar-container'>
              <Grammar value={personArray}/>
              <Grammar value={genderArray}/>
              <Grammar value={numberArray}/>
              <Grammar value={tenseArray}/>
              <Grammar value={moodArray}/>
            </div>
            <Verb/>
            <Answer/>
          </div>
        </div>
      </div>
    )
}
