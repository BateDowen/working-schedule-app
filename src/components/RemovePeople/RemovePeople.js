import { useNavigate } from "react-router-dom";
import classes from './RemovePeople.module.css';


const RemovePeople = ({name}) =>{
    const navigate = useNavigate()
    const RemovePeopleHandler = () =>{
        const people = JSON.parse(localStorage.getItem('peopleSchedule'));
        const personToRemove = people.find(p => p.name == name);
        const indexOfPerson = people.indexOf(personToRemove) ;
        people.splice(indexOfPerson,1);
        localStorage.setItem('peopleSchedule', JSON.stringify(people));
        navigate(0)
      };
    return(
        <button className={classes.removePerson} onClick={RemovePeopleHandler}>Премахни</button>
    )
};

export default RemovePeople;
