import React, { Component } from 'react'
import Link from 'gatsby-link'

// Vertical slider

class VSlider extends Component {
  constructor(props) {
    super(props);

    this.textArray = [
      'Developer\'s Group',
      'Pay Up',
      'Night Messenger',
      'Mosu',
    ];

    this.state = {
      textIndex: 0,
    }
    this.startLoop = this.startLoop.bind(this);
  }

  componentDidMount() {
    setInterval(this.startLoop(), 1500)
  }

  startLoop() {

    console.log(this.state.textIndex);

    if(this.state.textIndex === this.textArray.length - 1) {
      this.setState({ textIndex: 0 });
    } else {
      this.setState({ textIndex: this.state.textIndex++ })
    }
  }

  render() {
    return (
      <p>{ this.textArray[this.state.textIndex] }</p>
    );
  }
}

export default VSlider