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

import { useContext, useEffect, useState } from "react";
import Day from "./Day";
import classes from "./Days.module.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
export const daysArr = ["Нед", "Пон", "Вт", "Ср", "Четв", "Пт", "Сб"];
export const Days = () => {
  const [indexHandler, setIndexHandler] = useState([]);
//   const [datesHandler, setDatesHandler] = useState([1, 2, 3, 4, 5, 6, 7]);

const datesHandler = [1, 2, 3, 4, 5, 6, 7];

  const ctx = useContext(Context)
  const navigate = useNavigate();

  const prevWeekHandler = () => {
    setIndexHandler(indexHandler.map((e) => e - 7));
  };
  const nextWeekHandler = () => {
    setIndexHandler(indexHandler.map((e) => e + 7));
  };
  console.log(datesHandler);
    useEffect(() => {
    ctx.setDates(datesHandler)
      console.log('update');

  },[indexHandler])
  return (
    <div className={classes.days}>
      <div className={classes.name}>
        <p>Име</p>
        <button className={classes.prevBtn} onClick={prevWeekHandler}>
          {"<"}
        </button>
        <button className={classes.prevBtn} onClick={nextWeekHandler}>
          {">"}
        </button>
      </div>
      {daysArr.map((e) => {
        return (
          <Day
            key={e}
            day={e}
            index={daysArr.indexOf(e)}
            indexHandler={indexHandler}
            datesHandler={datesHandler}
          />
        );
      })}
    </div>
  );
};
