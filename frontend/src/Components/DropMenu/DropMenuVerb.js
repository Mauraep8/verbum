import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenuVerb(props) {

  console.log(props)
  return (  
    <div className='dropmenu'>
        <button className='dropmenu__button'>{props.dropList[0]}</button>
        <div className='dropmenu__option-container'>
            {props.dropList.map((singleVerb) =>{
            return <Option
            value={singleVerb}/>
            })}
        </div>   
    </div> 
  )
}