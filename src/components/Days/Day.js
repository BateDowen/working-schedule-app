import { useContext, useState } from "react";
import { getDate } from "../../Utils/Util";
import classes from "./Day.module.css";
import { Context } from "../../Context/Context";

const Day = ({ day, index, indexHandler,datesHandler }) => {
  let newDate = new Date();
  let today = newDate.getDay();

  const ctx = useContext(Context)
  if (!indexHandler.hasOwnProperty(index)) {
    indexHandler.push(index);
  }
  let date = getDate(indexHandler[index]);
  datesHandler[index] = getDate(indexHandler[index]);
    // console.log(datesHandler);
   
  return (
    <div
      className={`${classes.day} ${
        today === indexHandler[index] ? classes.active : ""
      }`}
    >
      {day} {date}
    </div>
  );
};
export default Day;
