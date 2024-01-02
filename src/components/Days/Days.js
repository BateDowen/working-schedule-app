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

import { useState } from "react";
import Day from "./Day";
import classes from "./Days.module.css";
import { getDate } from "../../Utils/Util";
export const daysArr = ["Нед", "Пон", "Вт", "Ср", "Четв", "Пт", "Сб"];
export const Days = () => {
    const [indexDemo, setIndexDemo] = useState([])
    const prevWeekHandler = () => {
        setIndexDemo(indexDemo.map(e => e - 7))
    }
    const nextWeekHandler = () => {
        setIndexDemo(indexDemo.map(e => e + 7))

    }
    return (
        <div className={classes.days}>
        <div className={classes.name}>
          <p>Име</p>
          <button onClick={prevWeekHandler}>Prev</button>
          <button onClick={nextWeekHandler}>Next</button>
        </div>
        {daysArr.map((e) => {
          return <Day key={e} day={e} index={daysArr.indexOf(e)} indexDemo={indexDemo} />;
        })}
     
    </div>
  );
};
