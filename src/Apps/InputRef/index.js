import React, { Component } from 'react';
import ChildInput from './components/ChildInput';

class InputRef extends Component {
  handleFocusInput = e => {
    // Explicitly focus the text input using the raw DOM API
    this.inputRef.focus();
  };

  handleFocusChildInput = e => {
    this.childInputRef.focus();
  };

  render() {
    /**
     * Use the 'ref' callback to store a reference to the
     * text input DOM element in an instance field
     * (for example, this.inputRef)
     */
    return (
      <div style={{ border: '1px solid #ccc' }}>
        <input
          type="text"
          ref={el => {
            this.inputRef = el;
          }}
        />
        <button type="button" onClick={this.handleFocusInput}>
          Focus the text input
        </button>
        <ChildInput
          childInputRef={el => {
            this.childInputRef = el;
          }}
        />
        <button type="button" onClick={this.handleFocusChildInput}>
          Focus the text child input
        </button>
      </div>
    );
  }
}

export default InputRef;
