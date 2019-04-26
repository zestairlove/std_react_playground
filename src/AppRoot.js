import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Apps/Menu';
import { Basic, Components, Counters, Stylings, RoutePage } from './pages';

class AppRoot extends Component {
  render() {
    return (
      <div className="AppRoot">
        <Menu />
        
        <Route exact path="/" component={Basic} />
        <Route path="/components" component={Components} />
        <Route path="/counters" component={Counters} />
        <Route path="/stylings" component={Stylings} />
        <Route path="/routepage" component={RoutePage} />
      </div>
    );
  }
}

export default AppRoot;
