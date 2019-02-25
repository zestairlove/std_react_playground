import React, { Component } from 'react';

import Message from './components/Message';

class Mailbox extends Component {
  state = {
    messages: ['React', 'Re: React', 'Re:Re: React']
  };

  render() {
    const { messages } = this.state;
    return <Message unreadMessages={messages} />;
  }
}

export default Mailbox;
