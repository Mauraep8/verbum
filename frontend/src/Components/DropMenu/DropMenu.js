import React, {useContext} from 'react'
import { ThemeContext } from '../../Pages/French/FrenchPage';
import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenu(props) {
  const {verbs} = useContext(ThemeContext)

  let newVerbList = ['aimer', 'avoir']
  const filteredVerbs = (array) =>{
    newVerbList = []
    for (let i = 0; i < array.length; i++) {
      const singleVerb = array[i];
      // console.log(singleVerb)
      let filterVerbs = verbs.filter((verb)=>(verb.verb === singleVerb))
      newVerbList.push(filterVerbs)
      
    }

  }
  filteredVerbs(props.dropList)
  console.log(newVerbList)


  return (
    <div className='dropmenu'>
      <h3>verb</h3>
      {/* <button>{dropList[0].verb}</button> */}
      <div>
      {props.dropList.map((singleVerb) =>{
                    return <Option
                
                    verbName={singleVerb}
      />
                })}
      </div>
    </div>
  )
}
