import classes from './Day.module.css';

const Day = ({day,index}) =>{
    let date = new Date();
    let today = date.getDay();
    console.log(index);
    console.log(today);
    return(
        <div className={`${classes.day} ${today === index ? classes.active : ''}`}>{day}</div>

    )
};
export default Day;
