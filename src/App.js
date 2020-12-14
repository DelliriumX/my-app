import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function login() {
  console.log("logujem korisnika")
}

function changePasswordValue(event) {
  console.log('korisnik menja password')
  console.log(event.target.value)
}

function App() {

  var rnd = Math.round(Math.random())

  var [student, setStudent] = useState({
    name: 'Milos',
    ocene: [6, 7]
  })

  function dodajOcenu() {
    student.ocene.push(10)
    console.log("dodao ocenu", student.ocene)
  }

  var i = 3

  return <>
    <h1>{student.name}</h1>
    <div>
      {
        student.ocene.map(element => <div>{element}</div>)
      }
    </div>
    <button onClick={dodajOcenu}></button>
  </>

  // return <form>
  //   <label>User</label>
  //   <input type="text"></input>
  //   <br />
  //   <label>Password</label>
  //   <input type="password" onChange={changePasswordValue}></input>
  //   <button type="button" onClick={login}>Login</button>
  // </form>




















  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
