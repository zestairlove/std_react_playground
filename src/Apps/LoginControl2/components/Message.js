import React from 'react';

const Message = ({ messages }) => {
  return (
    <>
      {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
    </>
  );
};

export default Message;
