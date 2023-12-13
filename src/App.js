import './App.css';
import Person from './components/Persons/Person';
import Days from './components/Days/Days';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="schedule">
            <Days/>

            <div className="names">
              <Person name="Миро"/>
              <Person name="Марийка"/>
              <Person name="Николинка"/>
              <Person name="Дони"/>
              <Person name="Някой"/>

            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
