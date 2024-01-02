import { getDate } from "../../Utils/Util";
import classes from "./Day.module.css";

const Day = ({ day, index }) => {
  let newDate = new Date();
  let today = newDate.getDay();

  const date = getDate(index);
  return (
    <div className={`${classes.day} ${today === index ? classes.active : ""}`}>
      {day} {date}
    </div>
  );
};
export default Day;
