import RemovePeople from "../RemovePeople/RemovePeople";
import classes from "./Person.module.css";
import Select from "./Select";

const daysArr = ["Нед", "Пон", "Вт", "Ср", "Четв", "Пт", "Сб"];
const Person = ({ name, shifts}) => {
  return (
    <div className={classes.shifts}>
      <div className={classes.name}>
        <p>{name}</p>
        <RemovePeople name={name}/>
      </div>
      {/* {shifts.map(({day, shift}) => {
        return (
          <Select key={day} day={day} name={name} shift={shift} />
        );
      })} */}
      {
        daysArr.map((e) =>{
         return <Select key={e} day={e} name={name} shifts={shifts} index={daysArr.indexOf(e)}/>
        })
      }
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
