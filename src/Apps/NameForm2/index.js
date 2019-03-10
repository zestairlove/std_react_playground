import React, { Component } from 'react';

// 비제어 컴포넌트 Uncontrolled Component
class NameForm2 extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.inputRef.value + ' Submited');
    this.inputRef.value = '';
  }

  handleChange = e => {
    const { value } = e.target;
    console.log(e.target.value);
    e.target.value = value.toUpperCase();
  }

  render() {
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
        <label>
          Name:
          <input
            type="text"
            defaultValue='default value'
            ref={el => this.inputRef = el}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm2;
