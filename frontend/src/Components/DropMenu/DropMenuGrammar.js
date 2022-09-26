import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenuGrammar(props) {

  return (  
    <div className='dropmenu'>
          <div className='dropmenu__option-container'>
            {props.value.map((singleOption) =>{
              return <Option
              value={singleOption.option}/>
            })}
           </div>   
    </div>
  )
}

