import Option from '../Option/Option'
import './DropMenuList.scss'
import React, {useRef, useEffect} from 'react'


export default function DropMenu(props) {

  const scroll = useRef([])
  const verbList = useRef([])

  useEffect(()=>{
    if (props.type === 'tense'){
      scroll.current.classList.add('dropMenuList__scroll--active')
    }
    if(props.type === 'gender' || props.type === 'number'){
      scroll.current.classList.add('dropMenuList__scroll--hidden')
    }
    if(props.type === 'verb' && props.list.length < 4){
      verbList.current.classList.add('dropMenuList__container--verb-short')
      verbList.current.classList.remove('dropMenuList__container--verb-long')   
      scroll.current.classList.add('dropMenuList__scroll--hidden')
      scroll.current.classList.remove('dropMenuList__scroll--active')

    } 
    if(props.type === 'verb' && props.list.length > 4){
      verbList.current.classList.remove('dropMenuList__container--verb-short')
      verbList.current.classList.add('dropMenuList__container--verb-long')  
      scroll.current.classList.remove('dropMenuList__scroll--hidden')
      scroll.current.classList.add('dropMenuList__scroll--active')

    } 
  })

  if (props.type !== 'verb'){
    return (  
      <div className='dropMenuList'>
            <div className={`dropMenuList__container dropMenuList__container--${props.type}`}>
              <div className='dropMenuList__scroll' ref={scroll}>
                {props.list.map((singleOption) =>{
                  return <Option
                  key={singleOption.id}
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
                  />                
                })}
                </div>
             </div>   
      </div>
    )
  } else if (props.type === 'verb'){
    return (  
      <div className='dropMenuList'> 
            <div className={`dropMenuList__container`} ref={verbList}>
              <div className='dropMenuList__scroll' ref={scroll}>
                  {props.list.map((singleOption) =>{
                    return <Option
                    key={singleOption.id}
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
                    />
                  })}
                </div>
             </div>   
      </div>
    )
  }


}

