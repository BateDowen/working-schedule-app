import classes from './Person.module.css'

const Person = ()=>{

    return(
       
        <div className={classes.shifts}>
            <div className="name">Миро</div>
            <div className={classes.shift}>1</div>
            <div className={classes.shift}>2</div>
            <div className={classes.shift}>1</div>
            <div className={classes.shift}>2</div>
            <div className={classes.shift}>2</div>
            <div className={classes.shift}>2</div>
            <div className={classes.shift}>2</div>
        </div>
       
    )
}
export default Person;
