import React from 'react';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import App from './containers/App';

/**
 * thunk란 특정 작업을 나중에 할 수 있도록 미루려고 함수 형태로 감싼 것을 의미힌다.
 * redux-thunk는 객체가 아닌 함수도 디스패치할 수 있게한다.
 * 일반 액션 객체로는 특정 액션을 디스패치한 후 몇 초 뒤에 실제로 반영시키거나
 * 현재 상태에 따라 무시하도록 만들 수 없다.
 * 
 * redux-thunk 미들웨어는 함수를 디스패치할 수 있게 함으로써 일반 액션 객체로는
 * 할 수 없는 작업들을 할 수 있게한다.
 */

const CounterReduxThunk = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxThunk;
