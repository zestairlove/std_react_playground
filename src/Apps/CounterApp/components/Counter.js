import React from 'react';
import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      style={{ backgroundColor: color }}
      onClick={onIncrement}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
    >
      {number}
    </div>
  );
};

export default Counter;
