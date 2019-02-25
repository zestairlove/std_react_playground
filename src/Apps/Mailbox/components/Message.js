import React from 'react';

const Message = ({ unreadMessages }) => (
  <div style={{ border: '1px solid #ccc' }}>
    {/* 논리 && 연산자가 있는 인라인 조건 */}
    {unreadMessages.length > 0 && (
      <p>You have {unreadMessages.length} unread messages.</p>
    )}
  </div>
);

export default Message;
