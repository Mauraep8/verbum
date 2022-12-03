
import DropMenuVerb from '../DropMenu/DropMenuVerb';
import './Verb.scss'

export default function Verb() {


 

  return (
    <div className='verb'>
        <button className='verb__button'>Verb</button>
        <div className='verb__dropmenu-wrapper--hidden'>
          {/* <DropMenuVerb /> */} 
        </div>
    </div>
  )
}
