import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
// action creators
import * as counterActions from '../modules/counter';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 액션 생성 함수 준비
const mapDispatchToProps = dispatch => ({
  onCreate: () => dispatch(counterActions.create(getRandomColor())),
  onRemove: () => dispatch(counterActions.remove())
});

// 리덕스에 연결시키고 내보낸다.
export default connect(
  null,
  mapDispatchToProps
)(App);
