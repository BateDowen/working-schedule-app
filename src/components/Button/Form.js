

const Form = (props) =>{
  
    const addName = (e) =>{
        e.preventDefault();
        if (e.target.value != '') {
            props.newPersonName(e.target.value)
            
        }
    }
    return (
        <div >
            <form className="form" onSubmit={props.addPerson}>
                <label htmlFor="name"><span>Име</span></label>
                <input id="name" onChange={addName} ></input>
            </form>
        </div>
    )
};
export default Form;
