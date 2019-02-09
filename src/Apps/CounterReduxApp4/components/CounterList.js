import React from 'react';
import Counter from './Counter';

import './CounterList.css';

const CounterList = ({
  counters,
  CounterActions /*onIncrement, onDecrement, onSetColor*/
}) => {
  const {
    increment: onIncrement,
    decrement: onDecrement,
    setColor: onSetColor
  } = CounterActions;
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div className="CounterList">{counterList}</div>;
};

export default CounterList;
