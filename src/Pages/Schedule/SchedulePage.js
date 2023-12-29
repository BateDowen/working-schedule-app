import AddPeople from "../../components/AddPeople/AddPeople";
import { Days } from "../../components/Days/Days";
import Persons from "../../components/Persons/Persons";

const Schedule = () => {


  return (
    <div className="schedule">
      <Days />

      <div className="names">
        <Persons  />
        <AddPeople  />
      </div>
    </div>
  );
};

export default Schedule;
