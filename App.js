import {useState} from 'react';
import data from './data.js';
import Person from './components/Person'

function App() {

  const [people, setPeople] = useState(data);
  return (


    <div className="d-flex justify-content-center mt-5">
        <div className="bg-light w-25 rounded pt-3">
          <h4 className="d-flex justify-content-center">{people.length} Birthdays today</h4>
            {people.map((person) => {
              return <Person key={person.id} person={person} />
            })}
          <div className="d-flex">
          {people.length > 0 && <button className="btn btn-outline-danger btn-block m-3" onClick={() => setPeople([])}>Clear All</button>
            
          }
          </div>
        </div>
    </div>
    
    
  );
}

export default App;
