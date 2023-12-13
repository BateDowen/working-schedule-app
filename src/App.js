import logo from './logo.svg';
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
              <Person />
              <Person />
              <Person />
              <Person />
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
