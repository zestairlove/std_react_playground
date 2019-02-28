import React from 'react';

const ChildInput = ({ childInputRef }) => {
  return (
    <div>
      <label>
        ChildInput: 
        <input type="text" ref={childInputRef} />
      </label>
    </div>
  );
};

export default ChildInput;
