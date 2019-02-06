import React from 'react';
import App from './containers/App';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// create store
const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);

const CounterReduxApp3 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxApp3;
