import React, { Component } from 'react';
import Counter from './components/Counter';
import getRandomColor from './lib/getRandomColor';

class CounterApp extends Component {
  state = {
    number: 0,
    color: 'black'
  };

  handleIncrement = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleDecrement = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  };

  handleSetColor = () => {
    const color = getRandomColor();
    this.setState({
      color
    });
  };

  render() {
    const { number, color } = this.state;
    const { handleIncrement, handleDecrement, handleSetColor } = this;

    return (
      <div>
        <Counter
          number={number}
          color={color}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSetColor={handleSetColor}
        />
      </div>
    );
  }
}

export default CounterApp;
