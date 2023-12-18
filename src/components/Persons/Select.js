import classes from "./Select.module.css";
import { useEffect, useState } from "react";

const Select = ({ day, name, person }) => {
  const [shift, setShift] = useState({});
  const [dayOfWeek, setDay] = useState({});
  const [selectOption, setSelectOption] = useState({});

  function changeShift(e) {
    setShift(e.target.value);
    setDay(day);
  }
  if (!person[name].shifts.day) {
    person[name].shifts.day = dayOfWeek;
  }
  person[name].shifts.day[day] = { dayOfWeek, shift };
  console.log(person);

  return (
    <div className={classes.shift}>
      <p>
        <select
          className={classes.select}
          onChange={(e) => setSelectOption(e.target.value)}
          onClick={changeShift}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={"OFF"}>OFF</option>
        </select>
      </p>
    </div>
  );
};
export default Select;
