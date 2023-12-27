import { useEffect, useState } from "react";
import AddPeople from "../../components/AddPeople/AddPeople";
import { Days } from "../../components/Days/Days";
import Persons from "../../components/Persons/Persons";

const Schedule = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  if (shouldRefresh) setShouldRefresh(false);
  const shouldRefreshHandler = () => setShouldRefresh(true);


  return (
    <div className="schedule">
      <Days />

      <div className="names">
        <Persons />
        <AddPeople handleRefresh={shouldRefreshHandler} />
      </div>
    </div>
  );
};

export default Schedule;
