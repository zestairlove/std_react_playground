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

import Clock from './Apps/Clock';
import NameForm from './Apps/NameForm';
import NameForm2 from './Apps/NameForm2';
import Reservation from './Apps/Reservation';
import LoginControl2 from './Apps/LoginControl2';
import Mailbox from './Apps/Mailbox';
import WarningBannerPage from './Apps/WarningBannerPage';
import LifeCycleSample from './Apps/LifeCycleSample';
import ComponentRef from './Apps/ComponentRef';
import InputRef from './Apps/InputRef';
import InchToCm from './Apps/InchToCm';

import Styling from './Apps/Styling';
import StyledComponent from './Apps/StyledComponent';

class AppRoot extends Component {
  render() {
    return (
      <div className="AppRoot">
        <StyledComponent />
        <Styling />
        <ReactBindEvent />
        <Clock />
        <NameForm />
        <NameForm2 />
        <Reservation />
        <LoginControl2 />
        <Mailbox />
        <WarningBannerPage />
        <LifeCycleSample />
        <ComponentRef />
        <InputRef />
        <InchToCm />
      </div>
    );
  }
}

export default AppRoot;
