import  ButtonSecondary  from "../ButtonSecondary/ButtonSecondary.js";
import "./ListEntry.scss";


export default function ListEntry(props)  {
    // console.log(props)

    return (
        <div className="ListEntry">
            <div className="ListEntry__container">
            <div className="ListEntry__text-container">
                    <p className="ListEntry__text">{props.label}</p>
                </div>
                <ButtonSecondary 
                actionType={props.actionType}
                id={props.id}
                value={props.value}
                label={props.label}
                verbGroup={props.verbGroup}
                verbID={props.verbID}
                primaryVerb={props.primaryVerb}
                specialVerb={props.specialVerb}
                auxiliaryVerb={props.auxiliaryVerb}
                initialVerb={props.initialVerb}
                verbSearchList={props.verbSearchList}
                userSearchList={props.verbSearchList}
                />
                
            </div>
        </div>
    )
}