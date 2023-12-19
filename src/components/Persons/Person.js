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
localStorage.setItem('Миро','Миро');
localStorage.setItem('Николинка','Николинка');
localStorage.setItem('Марийка','Марийка');
localStorage.setItem('Дони','Дони');
localStorage.setItem('Някой','Някой');

const Person = ({ name }) => {
  const person = {
    [name]: {
        shifts:{}
    }
  };
  // let people = [{name: "Miro", shift:[
  //     {day: 'monday', shift: 1},
  //     {day: 'tuesday', shift: 2}
  //     ]}];
  function addPerson(e) {
    e.preventDefault();

    console.log(typeof name);
  }
  return (
    <div className={classes.shifts}>
      <div className={classes.name}>
        <p onClick={addPerson}>{name}</p>
      </div>
      {daysArr.map((e) => {
        return (
          <Select key={e} day={e} name={name} person={person} />
          // <div className={classes.shift} key={e}>
          //     <p>
          //     <select className={classes.select} onChange={changeShift} day={e}>
          //         <option value={1}>1</option>
          //         <option value={2}>2</option>
          //         <option value={'OFF'}>OFF</option>
          //     </select>
          //     </p>

          // </div>
        );
      })}
      {/* <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div>
            <div className={classes.shift} onClick={changeShift}><p>1</p></div> */}
    </div>
  );
};
export default Person;
