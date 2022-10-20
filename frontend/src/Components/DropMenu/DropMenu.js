import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenu(props) {

  return (  
    <div className='dropmenu'>
          <div className='dropmenu__option-container'>
            {props.value.map((singleOption) =>{
              return <Option
              key={singleOption.id}
              value={singleOption.option}
              category={singleOption.category}/>
            })}
           </div>   
    </div>
  )
}

