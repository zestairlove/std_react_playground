import React, { Component } from 'react';

class ValueInput extends Component {
  handleChange = e => {
    const value = e.target.value;
    const newValue = value.replace(/[^0-9.]+/, '');

    this.props.onValueChange(newValue);
  };

  render() {
    const { value, title } = this.props;
    const { handleChange } = this;

    return (
      <div>
        <label>
          {title}: <br />
          <input type="text" value={value} onChange={handleChange} />
        </label>
      </div>
    );
  }
}

export default ValueInput;
