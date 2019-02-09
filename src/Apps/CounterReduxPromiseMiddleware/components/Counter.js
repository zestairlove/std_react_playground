import React from 'react';
import './Counter.css';

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
    >
      {number}
    </div>
  );
};

export default Counter;
