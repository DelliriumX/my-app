import React, { Component } from 'react'

class Student extends Component {
    state = {
        name: "Petar"

    }


    promeniStete = () => {
        this.setState({
            name: "Anabela"
        })
    }
    render() {
        return <div>
            <h3><span>Ovo je u state-u </span>{this.state.name}</h3>
            <h3><span>Ovo je u prop-u </span>{this.props.name}</h3>
            <span> ovo dugme je u studentu</span>
            <button onClick={this.promeniStete}>Promeni state</button>
        </div>
    }
}

export default Student