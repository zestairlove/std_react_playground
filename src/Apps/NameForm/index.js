import React, { Component } from 'react';

// 제어 컴포넌트 Controlled Component
class NameForm extends Component {
  state = {
    value: 'default value'
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    console.log(value + ' Submitted');
    this.setState({ value: '' });
  };

  handleChange = e => {
    // 핸들러로 state를 변경하지 않으면 값이 변경되지 않는다.
    const { value } = e.target;
    this.setState({
      value: value.toUpperCase()
    });
  };

  render() {
    const { value } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
        <label>
          name :
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
