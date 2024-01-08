import { useState } from "react";
import AddPeople from "../../components/AddPeople/AddPeople";
import { Days } from "../../components/Days/Days";
import Persons from "../../components/Persons/Persons";
const Schedule = ({dates,setDates}) => {

  return (

    <div className="schedule">
      <Days dates={setDates} />

      <div className="names">
        <Persons dates={dates} />
        <AddPeople  />
      </div>
    </div>
  );
};

export default Schedule;
