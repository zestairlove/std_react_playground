import React, { Component } from 'react';

// 제어 컴포넌트 Controlled Component
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }
  // state = {
  //   value: ''
  // }
  
  handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted: ' + this.state.value);
  }

  handleChange = e => {
    //const { value } = e.target;
    console.log('handleChange');
    this.setState({
      value: e.target.value
      // value
      // value: value.toUpperCase()
    })
  }

  render() {
    const { value } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
        <label>
          name :
          <input
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
