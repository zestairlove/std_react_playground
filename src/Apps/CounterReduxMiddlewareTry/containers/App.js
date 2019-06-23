import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import * as actions from '../actions';
import * as counterActions from '../modules/counter';
import getRandomColor from '../lib/getRandomColor';
import CounterListContainer from '../containers/CounterListContainer';
import Buttons from '../components/Buttons';

class App extends Component {
  render() {
    const { create: onCreate, remove: onRemove } = this.props.CounterActions;

    return (
      <div>
        <Buttons onCreate={() => onCreate(getRandomColor())} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 리덕스에 연결시키고 내보낸다
export default connect(
  null,
  dispatch => ({ CounterActions: bindActionCreators(counterActions, dispatch)})
)(App);
