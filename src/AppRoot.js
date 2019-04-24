import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Apps/Menu';
import { Basic, Components, Counters, Stylings } from './pages';

class AppRoot extends Component {
  render() {
    return (
      <div className="AppRoot">
        <Menu />
        <Route exact path="/" component={Basic} />
        <Route path="/components" component={Components} />
        <Route path="/counters" component={Counters} />
        <Route path="/stylings" component={Stylings} />
      </div>
    );
  }
}

export default AppRoot;
