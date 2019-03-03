import React, { Component } from 'react';

import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import Banner from './components/Banner';

// 조건부 렌더링
class LoginControl2 extends Component {
  state = {
    isLoggedIn: false,
    messages: ['React', 'Re: React', 'Re:Re: React'],
    isShowBanner: false
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

  handleBannerToggle = () => {
    this.setState((prevState, props) => ({
      isShowBanner: !prevState.isShowBanner
    }));
  };

  render() {
    const { isLoggedIn, messages, isShowBanner } = this.state;
    const { handleLogin, handleLogout, handleBannerToggle } = this;

    const button = isLoggedIn ? (
      <LoginButton onClick={handleLogout}>Logout</LoginButton>
    ) : (
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    );

    return (
      <div style={{ border: '1px solid #ccc' }}>
        <Greeting isLoggedIn={isLoggedIn} messages={messages} />
        {button}
        <button onClick={handleBannerToggle}>
          {isShowBanner ? 'Hide' : 'Show'}
        </button>
        <Banner isShow={isShowBanner} />
      </div>
    );
  }
}

export default LoginControl2;
