import { peopleSchedule } from "../../Utils/Util";
import classes from "./Select.module.css";
import { useEffect, useState } from "react";

// const Select = ({day, name, shift }) => {
  const Select = ({day ,name,shifts, index}) => {
  function getDate() {
    let newDate = new Date();
    let today = newDate.getDay();
    
    const getFirstDay = () =>{
        const today = new Date();
        const first = today.getDate() - today.getDay() + index;
        return new Date(today.setDate(first));
    };
//    
   const date = `${getFirstDay().getDate().toLocaleString()}.${(getFirstDay().getMonth() + 1).toLocaleString()}`;
   return date;
  };
  let persons = JSON.parse(localStorage.getItem('peopleSchedule'));
  let person;
  let shift;
  
  if (persons) {
    person =  persons.find(p => p.name === name);
    shift = person.shifts[index].shift;
    console.log(shifts[index].day)
    
  }

  
  function onSelectHandler(e) {
    let persons = JSON.parse(localStorage.getItem('peopleSchedule'))
    let person = persons.find(p => p.name === name);
    // shift = person.shifts[index].shift;
    person.shifts.map((val) => {

      if (val.day === shifts[index].day) {
        val.shift = e.target.value;
        console.log(val.day);
        val.day = getDate()
        }
    });
    persons.reduce((acc, p) => {
      if (p.name === name) acc.push(person);
      else acc.push(p);
      return acc;
  }, []);
  
  localStorage.setItem('peopleSchedule', JSON.stringify(persons));
  };

  return (
    <div className={classes.shift}>
      <p>
        <select
          className={classes.select}
          onChange={onSelectHandler}
          defaultValue={shift}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={"OFF"}>OFF</option>
        </select>
      </p>
    </div>
  );
};

// const Select = ({ day, name, person }) => {
//   const [shift, setShift] = useState({});
//   const [dayOfWeek, setDay] = useState({});
//   const [selectOption, setSelectOption] = useState({});

//     function onChangeShiftHandler(e) {
//         console.log(e.target.value);
//         console.log(day)
//     }

//   function changeShift(e) {
//     // setShift(e.target.value);
//     // setDay(day);
//     console.log('ON CLICK')
//   }
//   if (!person[name].shifts.day) {
//     person[name].shifts.day = dayOfWeek;
//   }
//   if (!peopleSchedule.name) {
//     peopleSchedule[name] = person[name];
//   }
//   person[name].shifts.day[day] = shift;

// //   useEffect(() =>{
// //     const data =  localStorage.getItem(name)
// //     console.log('name' + data);
// //    },[peopleSchedule[name]]);

//       localStorage.setItem(name, JSON.stringify(peopleSchedule[name]));
// //   useEffect(() =>{

// //   }, [shift,dayOfWeek])

//   return (
//     <div className={classes.shift}>
//       <p>
//         <select
//           className={classes.select}
//           onChange={onChangeShiftHandler}
//         //   onChange={(e) => setSelectOption(e.target.value)}
//         //   onClick={changeShift}
//           defaultValue={'choose'}
//         >
//           <option disabled value={'choose'}>Shift</option>
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={"OFF"}>OFF</option>
//         </select>
//       </p>
//     </div>
//   );
// };
export default Select;
