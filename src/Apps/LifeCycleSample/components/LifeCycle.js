import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      color: null
    };

    this.myRef = null;

    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', prevState.color, nextProps.color);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('componentDidUpdate');
    console.log(prevProps, this.props);
    console.log(prevState, this.state);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
    console.groupEnd();
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };

    return (
      <div>
        <p style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </p>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycle;
