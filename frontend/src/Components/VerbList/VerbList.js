import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

export default function VerbList(props)  {

    // console.log(props.list)

    return (
        <div className="verbList">
            <div className="verbList__container">
                {props.list.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb.id}
                    id={singleVerb.id}
                    verbName={singleVerb.verbName}
                    verbGroup={singleVerb.verbGroup}
                    bescherelleId={singleVerb.bescherelleId}
                    primaryVerb={singleVerb.primaryVerb}
                    specialVerb={singleVerb.specialVerb}
                    auxiliaryVerb={singleVerb.auxiliaryVerb}
                    initialVerb={singleVerb.initialVerb}
                    buttonAction={'add'}/>
                })}
            </div>
        </div>
    )
}
