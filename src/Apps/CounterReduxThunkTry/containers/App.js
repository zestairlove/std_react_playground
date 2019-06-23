import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterActions from '../modules/counter';

class App extends Component {
  render() {
    const { number, CounterActions } = this.props;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={CounterActions.incrementAsync}>+</button>
        <button onClick={CounterActions.decrementAsync}>-</button>
      </div>
    );
  }
}

export default connect(
  state => ({ number: state }),
  dispatch => ({ CounterActions: bindActionCreators(counterActions, dispatch) })
)(App);
