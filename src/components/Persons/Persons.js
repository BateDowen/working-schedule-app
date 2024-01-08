import React, { useCallback, useContext, useEffect, useState } from "react";
import Person from "./Person";
import { peopleSchedule } from "../../Utils/Util";
import { Context } from "../../Context/Context";

function Persons({dates}) {
  const [persons, setPersons] = useState(peopleSchedule);
  const people = localStorage.getItem("peopleSchedule");

  useEffect(() => {
    if (!people) {
      localStorage.setItem("peopleSchedule", JSON.stringify(peopleSchedule));
    } else {
        setPersons(JSON.parse(localStorage.getItem("peopleSchedule")));
    }
  }, []);
  const ctx = useContext(Context)
console.log(ctx);

  return (
       persons.map((p) => {
        return <Person key={p.name} name={p.name} shifts={p.shifts}dates={dates} />;
      })

  );
}

export default Persons;
