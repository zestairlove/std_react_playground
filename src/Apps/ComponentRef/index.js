import React, { Component } from 'react';
import ScrollBox from './components/ScrollBox';

// 컴포넌트에 ref 달기
class ComponentRef extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #ccc' }}>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default ComponentRef;
