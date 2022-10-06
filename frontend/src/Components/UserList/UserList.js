import ListEntry from "../ListEntry/ListEntry";

export default function UserList(props)  {

    // console.log(props.list)


    return (
        <div className="verbList">
            <div className="verbList__container">
                {props.list.map((singleVerb) =>{
                    return <ListEntry
                    key={singleVerb.id}
                    verbName={singleVerb.verbName}
                    buttonAction={'delete'}
                    />
                })}
            </div>
            <div className="verbList__button-container">
                <button className='verbList__button'>submit</button>
            </div>
        </div>
    )
}