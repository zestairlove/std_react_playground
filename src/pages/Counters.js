import React from 'react';

import CounterApp from '../Apps/CounterApp';
import CounterReduxApp from '../Apps/CounterReduxApp';
import CounterReduxApp2 from '../Apps/CounterReduxApp2';
import CounterReduxApp3 from '../Apps/CounterReduxApp3';
import CounterReduxApp4 from '../Apps/CounterReduxApp4';
import CounterReduxMiddleware from '../Apps/CounterReduxMiddleware';
import CounterReduxThunk from '../Apps/CounterReduxThunk';
import CounterReduxPromiseMiddleware from '../Apps/CounterReduxPromiseMiddleware';
import CounterReduxPender from '../Apps/CounterReduxPender';

const Counters = () => {
  return (
    <div>
      <CounterApp />
      <CounterReduxApp />
      <CounterReduxApp2 />
      <CounterReduxApp3 />
      <CounterReduxApp4 />
      <CounterReduxMiddleware />
      <CounterReduxThunk />
      <CounterReduxPromiseMiddleware />
      <CounterReduxPender />
    </div>
  );
};

export default Counters;