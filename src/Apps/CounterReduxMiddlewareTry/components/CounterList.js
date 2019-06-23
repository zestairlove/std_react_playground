import React from 'react';

import './CounterList.css';
import Counter from './Counter';

const CounterList = ({ counters, CounterActions }) => {
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

  return (
    <div className="CounterList">
      {counterList}
    </div>
  );
};

export default CounterList;