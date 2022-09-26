// import "./ListEntry.scss";

function Checkbox()  {

    const selectCheckbox = (e) =>{
        console.log(e.target)
    }

    return (
        <>
        <div className="ListEntry">
            <div className="ListEntry_container">
                <input type="checkbox" onChange={selectCheckbox}/>
            </div>
        </div>
        </>
    ) 
}
    
export default Checkbox;