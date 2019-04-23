import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoot from './AppRoot';

const Root = () => {
  return (
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  );
};

export default Root;
