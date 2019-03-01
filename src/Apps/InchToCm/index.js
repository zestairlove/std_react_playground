import React, { Component } from 'react';
import ValueInput from './components/ValueInput';

class InchToCm extends Component {
  state = {
    inch: '',
    cm: ''
  };

  handleInchChange = inch => {
    const cm = inch * 2.54;

    this.setState({
      inch,
      cm
    });
  };

  handleCmChange = cm => {
    const inch = cm / 2.54;

    this.setState({
      inch,
      cm
    });
  };

  render() {
    const { inch, cm } = this.state;
    const { handleInchChange, handleCmChange } = this;

    return (
      <div>
        <ValueInput
          title="inch"
          value={inch}
          onValueChange={handleInchChange}
        />
        <ValueInput title="cm" value={cm} onValueChange={handleCmChange} />
      </div>
    );
  }
}

export default InchToCm;
