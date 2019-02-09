import React from 'react';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import App from './containers/App';

/**
 * redux-pender
 * 액션 객체 안에 payload가 Promise 형태라면 시작하기 전, 완료 또는 실패를 했을 때
 * 뒤에 PENDING, SUCCESS, FAILURE 접미사를 붙여준다.
 * 
 * 추가로 요청을 관리하는 리듀서가 포함되어 있으며,
 * 요청 관련 액션들을 처리하는 액션 핸들러 함수들을 자동으로 만드는 도구도 들어있다.
 * 
 * 그리고 요청 중인 액션을 취소할 수 있는 기능도 내장되어 있다.
 */

const CounterReduxPender = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxPender;
