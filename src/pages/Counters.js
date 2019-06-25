import React from 'react';
import { Route } from 'react-router-dom';

import CounterMenu from '../Apps/CounterMenu';
import CounterApp from '../Apps/CounterApp';
import CounterReduxApp from '../Apps/CounterReduxApp';
import CounterReduxApp2 from '../Apps/CounterReduxApp2';
import CounterReduxApp3 from '../Apps/CounterReduxApp3';
import CounterReduxApp4 from '../Apps/CounterReduxApp4';
import CounterReduxMiddleware from '../Apps/CounterReduxMiddleware';
import CounterReduxMiddlewareTry from '../Apps/CounterReduxMiddlewareTry';
import CounterReduxThunk from '../Apps/CounterReduxThunk';
import CounterReduxThunkTry from '../Apps/CounterReduxThunkTry';
import CounterReduxPromiseMiddleware from '../Apps/CounterReduxPromiseMiddleware';
import CounterReduxPromiseMiddlewareTry from '../Apps/CounterReduxPromiseMiddlewareTry';
import CounterReduxPender from '../Apps/CounterReduxPender';
import CounterReduxPenderTry from '../Apps/CounterReduxPenderTry';

const Counters = ({ match }) => {
  return (
    <div>
      <CounterMenu />

      <Route exact path={`${match.url}`} component={CounterApp} />
      <Route path={`${match.url}/reduxapp`} component={CounterReduxApp} />
      <Route path={`${match.url}/reduxapp2`} component={CounterReduxApp2} />
      <Route path={`${match.url}/reduxapp3`} component={CounterReduxApp3} />
      <Route path={`${match.url}/reduxapp4`} component={CounterReduxApp4} />
      <Route path={`${match.url}/reduxmiddleware`} component={CounterReduxMiddleware} />
      <Route path={`${match.url}/reduxmiddlewaretry`} component={CounterReduxMiddlewareTry} />
      <Route path={`${match.url}/reduxthunk`} component={CounterReduxThunk} />
      <Route path={`${match.url}/reduxthunktry`} component={CounterReduxThunkTry} />
      <Route path={`${match.url}/reduxpromisemiddleware`} component={CounterReduxPromiseMiddleware} />
      <Route path={`${match.url}/reduxpromisemiddlewaretry`} component={CounterReduxPromiseMiddlewareTry} />
      <Route path={`${match.url}/reduxpender`} component={CounterReduxPender} />
      <Route path={`${match.url}/reduxpendertry`} component={CounterReduxPenderTry} />
    </div>
  );
};

export default Counters;