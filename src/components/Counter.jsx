import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialValue || 0,
    };
    console.log(
      '%c 🎲 im in the CONSTRUCTOR of COUNTER',
      'color: pink; background: black;'
    );
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    console.log(
      '%c 🎲 the COUNTER component DID MOUNT',
      'color: pink; background: black;'
    );
  }

  componentDidUpdate(previousProps, previousState) {
    console.log(
      `%c 🎲 the COUNTER component DID UPDATE: ${previousState.counter}`,
      'color: pink; background: black;'
    );
  }

  componentWillUnmount() {
    console.log(
      '%c 🎲 the COUNTER component WILL UNMOUNT',
      'color: pink; background: black;'
    );
  }

  render() {
    console.log(
      '%c 🎲 This is a RENDER of COUNTER',
      'color: pink; background: black;'
    );
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increaseCounter}>Increase</button>
      </div>
    );
  }
}

export default Counter;
