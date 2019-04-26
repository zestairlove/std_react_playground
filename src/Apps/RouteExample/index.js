import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './components/Menu';
import { Home, About, Posts } from './pages';

const RouteExample = () => {
  return (
    <div>
      <Menu />

      <Route exact path="/routepage" component={Home} />
      <Route exact path="/routepage/about" component={About} />
      <Route path="/routepage/about/:name" component={About} />
      <Route path="/routepage/posts/" component={Posts} />
    </div>
  );
};

export default RouteExample;
