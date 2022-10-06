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
                    buttonAction={'add'}/>
                })}
            </div>
        </div>
    )
}
