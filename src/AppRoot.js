import React, { Component } from 'react';

//import CounterApp from './Apps/CounterApp';
//import CounterReduxApp from './Apps/CounterReduxApp';
import CounterReduxApp2 from './Apps/CounterReduxApp2';

class AppRoot extends Component {
  render() {
    return (
      <div className="AppRoot">
        <CounterReduxApp2 />
      </div>
    );
  }
}

export default AppRoot;
