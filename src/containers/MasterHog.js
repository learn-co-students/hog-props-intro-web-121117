import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import Master from '../assets/master-hog.png'
import BabyHog from '../components/BabyHog'

class MasterHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eyeColor: "blue",
      name: "Master Blaster",
      weight: '2.54 Tons',
      offspring: []
    }
  }


  changeEyeColor(event) {
    event.preventDefault()
    if (event.target.value === "glowing") {
      this.setState({
        eyeColor: "glowing"
      })
    }
    else if (event.target.value === "blue"){
      this.setState({
        eyeColor: "blue"
      })
    }
      else {
        this.setState({
          eyeColor: "sun"
        })
      }
    };

  render() {
    let babies = this.props.offspring
    console.log(babies)
    return (
      <div>

        <form>
          <input
            type="radio"
            name="eyeColor"
            value="blue"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Blue<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="sun"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Sun<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="glowing"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Glowing<br></br>
        </form>


        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 400}}></img>
        </div>
        <ul className="hoglist">
          {babies.map( (baby, index) =>
            <div key={baby.index}>
              <BabyHog
                eyeColor={this.state.eyeColor} name={baby.name}
              />
            </div>
            )
          }
        </ul>
      </div>
    )
  }
}

export default MasterHog;
