import  ButtonSecondary  from "../ButtonSecondary/ButtonSecondary.js";
import "./ListEntry.scss";


export default function ListEntry(props)  {

    return (
        <div className="ListEntry">
            <div className="ListEntry__container">
                <ButtonSecondary 
                actionType={props.actionType}
                id={props.id}
                verbName={props.verbName}
                verbGroup={props.verbGroup}
                bescherelleId={props.bescherelleId}
                primaryVerb={props.primaryVerb}
                specialVerb={props.specialVerb}
                auxiliaryVerb={props.auxiliaryVerb}
                initialVerb={props.initialVerb}
                verbSearchList={props.verbSearchList}
                userSearchList={props.verbSearchList}
                />
                <div className="ListEntry__text-container">
                    <p className="ListEntry__text">{props.verbName}</p>
                </div>
            </div>
        </div>
    )
}