import React from 'react';
import App from './containers/App';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// create store
const store = createStore(reducers);

const CounterReduxApp2 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxApp2;