import React, { Component } from 'react';

// 비제어 컴포넌트 Uncontrolled Component
class NameForm2 extends Component {
  state = {
    value: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted: ' + this.state.value);
  };

  handleChange = e => {
    // 이벤트 핸들러로 state를 변경하지 않아도 값이 변경된다.
    // const { value } = e.target;
    // console.log('handleChange');
    // this.setState({
    //   value
    // })
  };

  render() {
    //const { value } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
        <label>
          name :
          <input
            type="text"
            defaultValue="default vaule"
            onChange={handleChange}
            ref={nameInput => (this.nameInput = nameInput)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm2;
