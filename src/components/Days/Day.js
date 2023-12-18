import classes from './Day.module.css';

const Day = ({day,index}) =>{
    let newDate = new Date();
    let today = newDate.getDay();
    
    const getFirstDay = () =>{
        const today = new Date();
        const first = today.getDate() - today.getDay() + index;
        return new Date(today.setDate(first));
    };
//    
   const date = `${getFirstDay().getDate().toLocaleString()}.${(getFirstDay().getMonth() + 1).toLocaleString()}`
    return(
        <div className={`${classes.day} ${today === index ? classes.active : ''}`}>{day} {date}</div>

    )
};
export default Day;
