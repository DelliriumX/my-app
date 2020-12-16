import { Component } from 'react'
import Student from './components/Student'

class App extends Component {
  state = {
    name: "Ana"
  }

  promeniProp = () => {
    this.setState({
      name: "Jovan"
    })
  }

  render() {
    return <div id="moja-aplikacija">
      <Student name={this.state.name}></Student>
      <span>ovo dugme je u applikaciji</span>
      <button onClick={this.promeniProp}>Promeni Prop</button>
    </div>
  }
}

export default App;
