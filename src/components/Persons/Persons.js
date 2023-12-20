import React, { useEffect, useState } from "react";
import Person from "./Person";

const peopleSchedule = [
  { name: "Миро", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'}, ] },
  { name: "Никол", shifts: [{day: 'Sun', shift: '1'} ,{day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'}, ] },
  { name: "Марий", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'}, ] },
  { name: "Дони", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'},] },
  { name: "Някой", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'},] },
];

function Persons() {

    const [persons, setPersons] = useState([]);
    useEffect(() =>{
        const people = localStorage.getItem('peopleSchedule')
        if (!people) {
            localStorage.setItem('peopleSchedule', JSON.stringify(peopleSchedule))
            
        } else {
            return
        }

    },[]);

    useEffect(() => {
        setPersons(JSON.parse(localStorage.getItem('peopleSchedule')));

    } ,[]);


    return persons.map(p => {
        return <Person key={p.name} name={p.name} shifts={p.shifts} />
    });
}

export default Persons;
