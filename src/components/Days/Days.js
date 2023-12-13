import classes from "./Days.module.css";
const Days = () =>{
    return (
    <div className={classes.days}>
        <div className={classes.name}>Име</div>
        <div className={classes.day}>Пон</div>
        <div className={classes.day}>Вт</div>
        <div className={classes.day}>Ср</div>
        <div className={classes.day}>Четв</div>
        <div className={classes.day}>Пт</div>
        <div className={classes.day}>Съб</div>
        <div className={classes.day}>Нед</div>
    </div>
    )
};
export default Days;
