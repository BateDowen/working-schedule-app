import React, { useCallback, useEffect, useState } from "react";
import Person from "./Person";
import { peopleSchedule } from "../../Utils/Util";

function Persons() {
  const [persons, setPersons] = useState(peopleSchedule);
  const people = localStorage.getItem("peopleSchedule");

  useEffect(() => {
    if (!people) {
      localStorage.setItem("peopleSchedule", JSON.stringify(peopleSchedule));
    } else {
        setPersons(JSON.parse(localStorage.getItem("peopleSchedule")));
    }
  }, []);


  return (
       persons.map((p) => {
        return <Person key={p.name} name={p.name} shifts={p.shifts} />;
      })

  );
}

export default Persons;
