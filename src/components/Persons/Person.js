import classes from "./Person.module.css";
import { daysArr } from "../Days/Days";
import Select from "./Select";
export const peopleSchedule = {
  'Миро': {},
  'Николинка': {},
  'Марийка': {},
  'Дони': {},
  'Някой': {}
};

const Person = ({ name, shifts, persons }) => {
 

  function addPerson(e) {
    e.preventDefault();

    console.log(typeof name);
  }

  

  return (
    <div className={classes.shifts}>
      <div className={classes.name}>
        <p onClick={addPerson}>{name}</p>
      </div>
      {shifts.map(({day, shift}) => {
        return (
          <Select key={day} day={day} name={name} shift={shift} />
        );
      })}
    </div>
  );
};


// const Person = ({ name, shifts }) => {
//   const person = {
//     [name]: {
//         shifts:{}
//     }
//   };
//   // let people = [{name: "Miro", shift:[
//   //     {day: 'monday', shift: 1},
//   //     {day: 'tuesday', shift: 2}
//   //     ]}];
//   function addPerson(e) {
//     e.preventDefault();

//     console.log(typeof name);
//   }

//   function onSelectHandler(params) {
    
//   }

//   return (
//     <div className={classes.shifts}>
//       <div className={classes.name}>
//         <p onClick={addPerson}>{name}</p>
//       </div>
//       {daysArr.map((e) => {
//         return (
//           <Select key={e} day={e} name={name} person={person} onChange={onSelectHandler} />
//           // <div className={classes.shift} key={e}>
//           //     <p>
//           //     <select className={classes.select} onChange={changeShift} day={e}>
//           //         <option value={1}>1</option>
//           //         <option value={2}>2</option>
//           //         <option value={'OFF'}>OFF</option>
//           //     </select>
//           //     </p>

//           // </div>
//         );
//       })}
//       {/* <div className={classes.shift} onClick={changeShift}><p>1</p></div>
//             <div className={classes.shift} onClick={changeShift}><p>1</p></div>
//             <div className={classes.shift} onClick={changeShift}><p>1</p></div>
//             <div className={classes.shift} onClick={changeShift}><p>1</p></div>
//             <div className={classes.shift} onClick={changeShift}><p>1</p></div>
//             <div className={classes.shift} onClick={changeShift}><p>1</p></div> */}
//     </div>
//   );
// };
export default Person;
