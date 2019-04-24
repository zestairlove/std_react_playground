import React from 'react';

import LifeCycleSample from '../Apps/LifeCycleSample';
import ComponentRef from '../Apps/ComponentRef';
import InputRef from '../Apps/InputRef';
import InchToCm from '../Apps/InchToCm';
import ReactBindEvent from '../Apps/ReactBindEvent';

const Basic = () => {
  return (
    <div>
      <ComponentRef />
      <InputRef />
      <InchToCm />
      <LifeCycleSample />
      <ReactBindEvent />
    </div>
  );
};

export default Basic;
