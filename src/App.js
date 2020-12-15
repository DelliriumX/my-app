import { Component } from 'react'
import Student from './components/Student'

class App extends Component {

  render() {
    return <div id="moja-aplikacija">
      <Student name="Ana" ocene={[8, 10]} />
      <Student name="Milos" ocene={[6, 7]} />
      <Student name="Jovan" ocene={[7, 10]} />
    </div>
  }
}

export default App;
