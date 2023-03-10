import Option from '../Option/Option'
import './DropMenuList.scss'
import React, {useRef, useEffect} from 'react'


export default function DropMenu(props) {

  // console.log(props)
  const scroll = useRef([])

  useEffect(()=>{
    if (props.type === 'tense' || props.type ==='verb'){
      scroll.current.classList.add('dropmenu__scroll--active')
    }
    if(props.type === 'gender' || props.type === 'number'){
      scroll.current.classList.add('dropmenu__scroll--hidden')
    }
  })

  if (props.type !== 'verb'){
    return (  
      <div className='dropmenu'>
            <div className={`dropmenu__option-container dropmenu__option-container--${props.type}`}>
              <div className='dropmenu__scroll' ref={scroll}>
                {props.list.map((singleOption) =>{
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
                  dropmenuType={props.type}
                  function={props.function}
                  />                
                })}
                </div>
             </div>   
      </div>
    )
  } else if (props.type === 'verb'){
    // console.log(props)
    return (  
      <div className='dropmenu'>
            <div className='dropmenu__option-container'>
              <div className='dropmenu__scroll' ref={scroll}>
                  {props.list.map((singleOption) =>{
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
                    dropmenuType={props.type}
                    function={props.function}
                    />
                  })}
                </div>
             </div>   
      </div>
    )
  }


}

