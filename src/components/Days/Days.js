import Day from "./Day";
import classes from "./Days.module.css";
const Days = () =>{
    
    // console.log(today);
    const days = ['Нед', 'Пон', 'Вт', 'Ср', 'Четв', 'Пт', 'Сб'];
    const dayList =  days.map((e )=>{
       
       return <Day key ={e} day={e} index={days.indexOf(e)}/>
    })
    return (
    <div className={classes.days}>
        <div className={classes.name}>Име</div>
            {dayList }
            
        {/* <div className={`${classes.day}`} value="1">Пон</div>

        <div className={classes.day} value="2">Вт</div>
        <div className={`${classes.day} ${today === event.target.value ? classes.active : ''}`} value="3">Ср</div>
        <div className={classes.day} value="4">Четв</div>
        <div className={classes.day} value="5">Пт</div>
        <div className={classes.day} value="6">Съб</div>
        <div className={classes.day} value="0">Нед</div> */}
    </div>
    )
};
export default Days;
