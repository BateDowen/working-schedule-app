// import Day from "./Day";
// import classes from "./Days.module.css";
// const Days = () =>{
   
//     const days = ['Нед','Пон' , 'Вт', 'Ср', 'Четв', 'Пт', 'Сб'];
//     const dayList =  days.map((e )=>{
       
//        return <Day key ={e} day={e} index={days.indexOf(e)}/>
//     })
//     return (
//     <div className={classes.days}>
//         <div className={classes.name}>Име</div>
//             {dayList }
//         </div>
//     )
// };
// export default Days;

import Day from "./Day";
import classes from "./Days.module.css";
export const daysArr = ['Нед','Пон' , 'Вт', 'Ср', 'Четв', 'Пт', 'Сб'];
export const Days = () =>{
   
      
    return (
    <div className={classes.days}>
        <div className={classes.name}>
            <p>Име</p>
        </div>
        {daysArr.map((e )=>{
       
       return <Day key ={e} day={e} index={daysArr.indexOf(e)}/>
    })}
        </div>
    )
};
