import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenu(props) {

  // console.log(props.value)

  if (props.verb === null){
    return (  
      <div className='dropmenu'>
            <div className='dropmenu__option-container'>
              {props.value.map((singleOption) =>{
                return <Option
                key={singleOption.id}
                optionType={'grammar'}
                value={singleOption.option}
                category={singleOption.category}/>
              })}
             </div>   
      </div>
    )
  } else if (props.value === null){
    // console.log(props.verb)
    return (  
      <div className='dropmenu'>
            <div className='dropmenu__option-container'>
              {props.verb.map((singleOption) =>{
                return <Option
                key={singleOption.id}
                optionType={'verb'}
                value={singleOption.verbName}
                category={'hello'}
                />
              })}
             </div>   
      </div>
    )
  }


}

