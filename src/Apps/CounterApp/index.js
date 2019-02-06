import React, { Component } from 'react';
import Counter from './components/Counter';

class CounterApp extends Component {
  state = {
    number: 0
  };

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <Counter
          number={this.state.number}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default CounterApp;
