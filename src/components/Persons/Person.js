import classes from './Person.module.css'

const Person = ({name})=>{
    function changeShift(e) {
        e.preventDefault();
        console.log('shift');
    }
    return(
       
        <div className={classes.shifts}>
            <div className={classes.name}><p>{name}</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
        </div>
       
    )
}
export default Person;
