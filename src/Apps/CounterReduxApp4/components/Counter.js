import React from 'react';
import './Counter.css';

import getRandomColor from '../lib/getRandomColor';

const Counter = ({
  number,
  color,
  index,
  onIncrement,
  onDecrement,
  onSetColor
}) => {
  const nextColor = getRandomColor();
  return (
    <div
      className="Counter"
      onClick={() => {
        onIncrement(index);
      }}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor({ index, nextColor })}
      style={{
        backgroundColor: color
      }}
    >
      {number}
    </div>
  );
};

export default Counter;
