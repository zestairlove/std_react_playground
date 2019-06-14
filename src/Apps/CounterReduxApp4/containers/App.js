import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action creators
import * as counterActions from '../modules/counter';

class App extends Component {
  render() {
    const { create: onCreate, remove: onRemove } = this.props.CounterActions;
    return (
      <div className="App">
        <Buttons onCreate={() => onCreate(getRandomColor())} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 리덕스에 연결시키고 내보낸다.
export default connect(
  null,
  dispatch => ({ CounterActions: bindActionCreators(counterActions, dispatch) })
)(App);
