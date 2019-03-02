import React, { Component } from 'react';

class BindEventHandler extends Component {
  constructor() {
    super();
    this.handleClickMethod2 = this.handleClickMethod2.bind(this);
    this.handleClickClassProp2 = () => {
      console.log('handleClickClassProp2');
      console.log('this', this);
    };
  }
  handleClickMethod(e) {
    console.log('handleClickMethod');
    console.log('this', this);
  }

  handleClickMethod2(e) {
    console.log('handleClickMethod2');
    console.log('this', this);
  }

  handleClickClassProp = e => {
    console.log('handleClickClassProp');
    console.log('this', this);
  };

  render() {
    return (
      <div style={{ border: '1px solid #ccc' }}>
        <div>
          <button onClick={this.handleClickMethod}>
            this.handleClickMethod
          </button>
        </div>
        <div>
          <button onClick={this.handleClickMethod.bind(this)}>
            this.handleClickMethod.bind(this)
          </button>
        </div>
        <div>
          <button onClick={() => this.handleClickMethod()}>
            this.handleClickMethod call with arrow func
          </button>
        </div>
        <div>
          <button onClick={this.handleClickMethod2}>
            this.handleClickMethod2 bind in construcot
          </button>
        </div>
        <div>
          <button onClick={this.handleClickClassProp}>
            this.handleClickClassProp
          </button>
        </div>
        <div>
          <button onClick={this.handleClickClassProp2}>
            this.handleClickClassProp2
          </button>
        </div>
      </div>
    );
  }
}

export default BindEventHandler;
