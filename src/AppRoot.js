import React, { Component } from 'react';

//import CounterApp from './Apps/CounterApp';
//import CounterReduxApp from './Apps/CounterReduxApp';
//import CounterReduxApp2 from './Apps/CounterReduxApp2';
//import CounterReduxApp3 from './Apps/CounterReduxApp3';
import CounterReduxApp4 from './Apps/CounterReduxApp4';

class AppRoot extends Component {
  render() {
    return (
      <div className="AppRoot">
        <CounterReduxApp4 />
      </div>
    );
  }
}

export default AppRoot;
