import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>Welcome Back!</div>;
  }
  return <div>Please sign up!</div>;
};

export default Greeting;
