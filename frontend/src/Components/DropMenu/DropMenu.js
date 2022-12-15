import Option from '../Option/Option'
import './DropMenu.scss'

export default function DropMenu(props) {

  // console.log(props)

  if (props.verb === null){
    return (  
      <div className='dropmenu'>
            <div className='dropmenu__option-container'>
              {props.value.map((singleOption) =>{
                return <Option
                key={singleOption.id}
                optionType={'grammar'}
                value={singleOption.option}
                category={singleOption.category}
                verbName={null}
                verbGroup={null}
                specialVerb={null}
                primaryVerb={null}
                initialVerb={null}
                bescherelleId={null}
                auxiliaryVerb={null}
                apiFormat={singleOption.apiFormat}
                />
           
              })}
             </div>   
      </div>
    )
  } else if (props.value === null){
    // console.log(props)
    return (  
      <div className='dropmenu'>
            <div className='dropmenu__option-container'>
              {props.verbList.map((singleOption) =>{
                return <Option
                key={singleOption.id}
                optionType={'verb'}
                value={singleOption.verbName}
                category={'verb'}
                verbName={singleOption.verbName}
                verbGroup={singleOption.verbGroup}
                specialVerb={singleOption.specialVerb}
                primaryVerb={singleOption.primaryVerb}
                initialVerb={singleOption.initialVerb}
                bescherelleId={singleOption.bescherelleId}
                auxiliaryVerb={singleOption.auxiliaryVerb}
                apiFormat={null}
                />
              })}
             </div>   
      </div>
    )
  }


}

