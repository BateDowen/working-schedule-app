import { useState } from "react";
import { getDate } from "../../Utils/Util";
import classes from "./Day.module.css";

const Day = ({ day, index, indexDemo }) => {
  let newDate = new Date();
  let today = newDate.getDay();
   if (!indexDemo.hasOwnProperty(index)) {
       indexDemo.push(index)
    
   }
   let date = getDate(indexDemo[index]);
  
  return (
    <div className={`${classes.day} ${today === index ? classes.active : ""}`}>
      {day} {date}
    </div>
  );
};
export default Day;
