import React from 'react';

const LoginButton = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default LoginButton;
