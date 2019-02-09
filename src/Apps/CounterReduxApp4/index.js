import React from 'react';
import App from './containers/App';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import reducers from './reducers';
import modules from './modules';

// create store
const store = createStore(
  //reducers,
  modules,
  window.devToolsExtension && window.devToolsExtension()
);

const CounterReduxApp4 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CounterReduxApp4;
