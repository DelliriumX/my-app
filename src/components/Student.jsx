import React, { Component } from 'react'

class Student extends Component {
    constructor(props) {
        super(props)
        this.sayGrades = this.sayGrades.bind(this)
    }
    sayName = () => {
        console.log(this.props.name)
    }
    sayGrades() {
        console.log(this.props.ocene)
    }

    render() {
        return <div>
            <h3>{this.props.name}</h3>
            {this.props.ocene.map(ocena => <div>{ocena}</div>)}
            <button onClick={this.sayName}>Reci ime</button>
            <button onClick={this.sayGrades}>Reci ocene</button>
        </div>
    }
}

export default Student