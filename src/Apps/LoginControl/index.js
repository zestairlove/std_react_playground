import React, { Component } from 'react';

import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';

// 조건부 렌더링
class LoginControl extends Component {
  state = {
    isLoggedIn: false
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    const { handleLogin, handleLogout} = this;
    let button = null;

    if (isLoggedIn) {
      button = <LoginButton onClick={handleLogout}>Logout</LoginButton>;
    } else {
      button = <LoginButton onClick={handleLogin}>Login</LoginButton>;
    }

    return (
      <div style={{ border: '1px solid #ccc' }}>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
