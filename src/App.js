import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
    };
    console.log(
      '%c im in the CONSTRUCTOR of APP.JS',
      'color: white; background: blue;'
    );
  }

  toggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter });
  };

  componentDidMount() {
    console.log(
      '%c 🎲 the APP.JS component DID MOUNT',
      'color: white; background: blue;'
    );
  }

  componentDidUpdate(previousProps, previousState) {
    console.log(
      `%c 🎲 the APP.JS component DID UPDATE: ${previousState.showCounter}`,
      'color: white; background: blue;'
    );
  }

  componentWillUnmount() {
    console.log(
      '%c 🎲 the APP.JS component WILL UNMOUNT',
      'color: white; background: blue;'
    );
  }

  render() {
    console.log(
      '%c 🎲 This is a RENDER of APP.JS',
      'color: white; background: blue;'
    );
    return (
      <div className="App">
        <button onClick={this.toggleCounter}>Toggle</button>
        {this.state.showCounter && <Counter initialValue={9}></Counter>}
      </div>
    );
  }
}

export default App;
