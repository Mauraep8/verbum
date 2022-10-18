import "./VerbList.scss";
import ListEntry from "../ListEntry/ListEntry";

export default function VerbList(props)  {

    // console.log(props.search)
    if (props.search === null){
        return (
            <div className="verbList">
                <div className="verbList__container">
                </div>
            </div>
        )
    }
    if (props.search.length === 0){
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
    } else {
        return (
            <div className="verbList">
                <div className="verbList__container">
                    {props.search.map((singleVerb) =>{
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
}
