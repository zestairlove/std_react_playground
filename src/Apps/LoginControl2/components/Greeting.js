import React from 'react';

import Message from './Message';

const Greeting = ({ isLoggedIn, messages }) => {
  if (isLoggedIn) {
    return (
      <>
        <div>Welcome Back!</div>
        <Message messages={messages} />
      </>
    );
  }
  return <div>Please sign up!</div>;
};

export default Greeting;
