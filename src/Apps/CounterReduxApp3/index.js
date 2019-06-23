import React from 'react';
import App from './containers/App';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// create store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

const CounterReduxApp3 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxApp3;
