import './App.css';
import Persons from './components/Persons/Persons';
import Person from './components/Persons/Person';
import {Days} from './components/Days/Days';

function App() {
// localStorage.setItem('Миро','Миро');
// localStorage.setItem('Николинка','Николинка');
// localStorage.setItem('Марийка','Марийка');
// localStorage.setItem('Дони','Дони');
// localStorage.setItem('Някой','Някой');

  return (

    <div className="App">
      <div className="container">
        <div className="schedule">
            <Days/>

            <div className="names">
              {/* <Person name="Миро"/>
              <Person name="Марийка"/>
              <Person name="Николинка"/>
              <Person name="Дони"/>
              <Person name="Някой"/> */}
              <Persons />

            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
