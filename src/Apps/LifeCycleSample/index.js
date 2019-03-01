import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';

// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCycleSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#000000'
    };
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div style={{ border: '1px solid #ccc' }}>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycle color={this.state.color} />
      </div>
    );
  }
}

export default LifeCycleSample;
