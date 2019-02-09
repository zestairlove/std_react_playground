import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import counter from './counter';
import post from './post';

// redux-pender 미들웨어를 적용하고 난 후에 라이브러리에 내장된 리듀서를 루트 리듀서에 넣어준다.

export default combineReducers({
  counter,
  post,
  pender: penderReducer
});

/**
 * pender 리듀서는 요청 상태를 관리한다. 이 리듀서가 가진 상태 구조는 다음과 같다.
 * {
 *   pending: {},
 *   success: {},
 *   failure: {}
 * }
 * 
 * 새 promise 기반 액션을 디스패치하면 상태는 다음과 같이 변한다.
 * {
 *   pending: {
 *     'ACTION_NAME': true
 *   },
 *   success: {
 *     'ACTION_NAME: false
 *   },
 *   failure: {
 *     'ACTION_NAME: false
 *   }
 * }
 * 
 * 성공적으로 요청이 끝났을 때
 * {
 *   pending: {
 *     'ACTION_NAME': false
 *   },
 *   success: {
 *     'ACTION_NAME: true
 *   },
 *   failure: {
 *     'ACTION_NAME: false
 *   }
 * }
 * 
 * 요청이 실패했을 때
 * {
 *   pending: {
 *     'ACTION_NAME': false
 *   },
 *   success: {
 *     'ACTION_NAME: false
 *   },
 *   failure: {
 *     'ACTION_NAME: true
 *   }
 * }
 * 
 * 이런 작업은 pender 리듀서가 액션 이름에 따라서 자동으로 상태를 변경해 주기 때문에
 * 요청과 관련된 상태는 더 이상 직접 관리할 필요가 없다.
 */
