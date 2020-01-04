import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  const [person, setPerson] = useState([
    { name : "mark" , age: "11" },
    { name : "ss" , age: "12" },
    { name : "dd" , age: "13" }
  ])
  const newPerson = [
    { name : "a" , age: "1" },
    { name : "b" , age: "2" },
    { name : "c" , age: "3" }
  ]

  return (
    <div className="App">
      <p>mark</p>
      <p>sarawut nawawisitkul</p>
      <button onClick={() => setPerson(newPerson)}>
        Click me
      </button>
      <Person name={person[0].name} age={person[0].age} />
      <Person name={person[1].name} age={person[1].age} >Some thing fuck</Person>
      <Person  name={person[2].name} age={person[2].age}/>
    </div>
  );
}

export default App;
