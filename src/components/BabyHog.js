import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import Baby from "../assets/baby-hog.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

const imgMapper = {
  blue: BlueBaby,
  glowing: GlowingBaby,
  sun: SunBaby
};

class BabyHog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeColor: props.eyeColor,
      name: props.name,
      weight: props.weight
    };
  }

  selectImg() {
    let color = this.state.eyeColor;
    return imgMapper[`${color}`];
  }

  changeWeight(event) {
    event.preventDefault();
    this.setState({
      eyeColor: this.props.eyeColor
    });
    // this.state.changeEyeColor();
  }

  render() {
    console.log("Baby Hog renders");
    console.log("state", this.state);
    console.log("props", this.props);

    return (
      <li className="hogbabies">
        <h1>{this.state.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h4>Eye Color: {this.state.eyeColor}</h4>
        <div className="wrap-crap">
          <Button animated id="increase" onClick={this.changeWeight.bind(this)}>
            <Button.Content id="increase" visible>
              Increase Weight
            </Button.Content>
            <Button.Content id="increase" hidden>
              <Icon id="increase" name="plus" />
            </Button.Content>
          </Button>

          <Button animated onClick={this.changeWeight.bind(this)}>
            <Button.Content visible>Decrease Weight</Button.Content>
            <Button.Content hidden>
              <Icon name="minus" />
            </Button.Content>
          </Button>
        </div>

        <img
          src={this.selectImg()}
          style={{ height: `${this.state.imgHeight}px` }}
          alt={this.selectImg()}
        />
      </li>
    );
  }
}

export default BabyHog;
