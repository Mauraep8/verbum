import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";
import React, {useRef, useEffect} from 'react'


export default function VerbList(props)  {

    const scroll = useRef([])
    console.log(props.list.length)
    useEffect(()=>{
        if(props.list.length <= 5){
            scroll.current.classList.add('verbList__scroll--hidden')
            scroll.current.classList.remove('verbList__scroll--active')
        }
        if(props.list.length > 5){
            scroll.current.classList.remove('verbList__scroll--hidden')
            scroll.current.classList.add('verbList__scroll--active')
        }
    })

    // if search comes empty, show empty verbList container
    if (props.search === null){
        return (
            <div className="verbList">
                <div className="verbList__container">
                <div className="verbList__scroll" ref={scroll}></div>
                </div>
            </div>
        )
    }
    // if search comes up with value, show list entry that start with search value charac
    if (props.search.length === 0){
        return (
            <div className="verbList">
                <div className="verbList__container">
                    <div className="verbList__scroll" ref={scroll}>
                    {props.list.map((singleVerb) =>{
                        return <ListEntry
                        key={singleVerb.id}
                        id={singleVerb.id}
                        value={singleVerb.value}
                        label={singleVerb.label}
                        verbGroup={singleVerb.verbGroup}
                        verbID={singleVerb.verbID}
                        primaryVerb={singleVerb.primaryVerb}
                        specialVerb={singleVerb.specialVerb}
                        auxiliaryVerb={singleVerb.auxiliaryVerb}
                        initialVerb={singleVerb.initialVerb}
                        actionType={props.actionType}/>
                    })}
                    </div>
                </div>
            </div>
        )
        
    // if search isn't being used, show regular list
    } else {
        return (
            <div className="verbList">
                <div className="verbList__container">
                    <div className="verbList__scroll" ref={scroll}>
                        {props.search.map((singleVerb) =>{
                            return <ListEntry
                            key={singleVerb.id}
                            id={singleVerb.id}
                            value={singleVerb.value}
                            label={singleVerb.label}
                            verbGroup={singleVerb.verbGroup}
                            verbID={singleVerb.verbID}
                            primaryVerb={singleVerb.primaryVerb}
                            specialVerb={singleVerb.specialVerb}
                            auxiliaryVerb={singleVerb.auxiliaryVerb}
                            initialVerb={singleVerb.initialVerb}
                            actionType={props.actionType}
                            verbSearchList={props.search}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
