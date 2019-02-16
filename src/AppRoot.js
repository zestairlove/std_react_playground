import React, { Component } from 'react';

//import CounterApp from './Apps/CounterApp';
//import CounterReduxApp from './Apps/CounterReduxApp';
//import CounterReduxApp2 from './Apps/CounterReduxApp2';
//import CounterReduxApp3 from './Apps/CounterReduxApp3';
//import CounterReduxApp4 from './Apps/CounterReduxApp4';
//import CounterReduxMiddleware from './Apps/CounterReduxMiddleware';
//import CounterReduxThunk from './Apps/CounterReduxThunk';
//import CounterReduxPromiseMiddleware from './Apps/CounterReduxPromiseMiddleware';
//import CounterReduxPender from './Apps/CounterReduxPender';
import ReactBindEvent from './Apps/ReactBindEvent';

class AppRoot extends Component {
  render() {
    return (
      <div className="AppRoot">
        <ReactBindEvent />
      </div>
    );
  }
}

export default AppRoot;
