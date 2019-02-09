import React from 'react';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import App from './containers/App';

/**
 * redux-promise-middleware
 * 이 미들웨어는 Promise 객체를 payload로 전달하면 요청을 시작, 성공, 실패할 때
 * 액션의 뒷부분에 _PENDING, _FULFILLED, _REJECTED를 붙여서 반환한다.
 */

const CounterReduxPromiseMiddleware = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxPromiseMiddleware;
