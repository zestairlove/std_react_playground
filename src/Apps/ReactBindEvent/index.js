import React, { Component } from 'react';

class BindEventHandler extends Component {
  constructor() {
    super();
    this.handleClickArrow = () => {
      console.log('constrouctor handleClickArrow');
      console.log(this);
    }
  }
  // handleClickArrow = e => {
  //   console.log('handleClickArrow');
  //   console.log(this);
  // }
  handleClickMethod(e) {
    console.log('handleClickMethod');
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={this.handleClickMethod}
          >this.handleClickMethod</button>
        </div>
        <div>
          <button
            onClick={this.handleClickArrow}
          >this.handleClickArrow</button>
        </div>
      </div>
    );
  }
}

export default BindEventHandler;
