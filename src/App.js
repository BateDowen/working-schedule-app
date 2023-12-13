import logo from './logo.svg';
import './App.css';
import Person from './components/Persons/Person';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="schedule">

            
          
          {/* <div> */}

            <div className="days">
              <div className="name">Име</div>
              <div className="day">Пон</div>
              <div className="day">Вт</div>
              <div className="day">Ср</div>
              <div className="day">Четв</div>
              <div className="day">Пт</div>
              <div className="day">Съб</div>
              <div className="day">Нед</div>
            </div>
            <div className="names">
              <Person />
              <Person />
              <Person />
              <Person />
             
                {/* <div className="name">Миро</div>
                <div className="name">Никол</div>
                <div className="name">Марийка</div>
                <div className="name">Дони</div>
                <div className="shifts">
                  <div className="shift">1</div>
                  <div className="shift">2</div>
                  <div className="shift">1</div>
                  <div className="shift">2</div>
                </div> */}
            </div>
          {/* </div> */}
          </div>
        </div>

    </div>
  );
}

export default App;
