import CounterList from '../components/CounterList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import * as actions from '../actions';
import * as counterActions from '../modules/counter';
//import getRandomColor from '../lib/getRandomColor';

/**
 * CounterList 컴포넌트의 Container 컴포넌트
 * CounterList 컴포넌트를 애플리케이션 데이터 레이어와 묶는 역할을 한다.
 */
const CounterListContainer = connect(
  state => ({ counters: state.counters }),
  dispatch => ({ CounterActions: bindActionCreators(counterActions, dispatch)})
)(CounterList);

export default CounterListContainer;