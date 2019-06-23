import React from 'react';
import './Counter.css';
import getRandomColor from '../lib/getRandomColor';

const Counter = ({ index, number, color, onIncrement, onDecrement, onSetColor }) => {
  const nextColor = getRandomColor();
  return (
    <div
      className="Counter"
      style={{ backgroundColor: color }}
      onClick={() => onIncrement(index)}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor({ index, nextColor })}
    >
      {number}
    </div>
  );
};

export default Counter;
