import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import HogForm from './HogForm'
import '../App.css'

let id= 3
class App extends Component {
  constructor() {
    super()
    this.state = {
      offspring: Offspring['offspring']
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target[0].value
    let weight = event.target[1].value
    this.setState({
      offspring: [
        ...this.state.offspring,
        {id: ++id, name: name, weight: weight}
      ]
      }, () => console.log(id))
    }

  render() {

    return (
      <div className="App">
        <MasterHog offspring={this.state.offspring} />
        <HogForm submitCallback={this.handleSubmit}/>
      </div>
    )
  }

}

export default App
