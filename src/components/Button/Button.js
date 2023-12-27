import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Button.module.css' 
import Form from './Form';

const Button = ({handleRefresh}) => {
    const navigate = useNavigate();
    const [isShown,setIsShown] = useState(false)
    const toggleForm = () =>{
        setIsShown(current => !current)
    }
    const [newPersonName, setNewPersonName] = useState()
   
    const addPersonHandler = (e) =>{
        e.preventDefault()
        const people = JSON.parse(localStorage.getItem('peopleSchedule'));
        if (newPersonName != '') {
            people.push({name:newPersonName,  shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'},]})
            localStorage.setItem('peopleSchedule', JSON.stringify(people));
            
        }
        setIsShown(current => !current)
        handleRefresh();
        

    }
  return (
    <div className={classes.addPerson}>
      <button onClick={toggleForm}>Add Person</button>
      {isShown && <Form addPerson={addPersonHandler} newPersonName = {setNewPersonName} />}
    </div>
  );
};
export default Button;

