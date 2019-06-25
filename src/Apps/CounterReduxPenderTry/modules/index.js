import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import counter from './counter';
import post from './post';

/**
 * penderReducer는 요청상태를 관리한다. 이 리듀서가 가진 상태 구조는 다음과 같다.
 * {
 *   pending: {},
 *   success: {},
 *   failure: {}
 * }
 * 
 * 새 Promise 기반 액션을 디스패치하면 상태는 다음과 같이 변한다.
 * {
 *   pending: {
 *     'ACTION_NAME': true
 *   },
 *   success: {
 *     'ACTION_NAME': false
 *   },
 *   failure: {
 *     'ACTION_NAME': false
 *   }
 * } 
 */

export default combineReducers({
  counter,
  post,
  pender: penderReducer
});