import CounterList from '../components/CounterList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action creators
import * as counterActions from '../modules/counter';

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 한다.
const CounterListContainer = connect(
  state => ({ counters: state.counters }),
  dispatch => ({ CounterActions: bindActionCreators(counterActions, dispatch) })
)(CounterList);

export default CounterListContainer;
