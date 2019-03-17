import React, { Component } from 'react';

import './Styling.scss';
import StylingScss from './components/StylingScss';
import CssModule from './components/CssModule';

class Styling extends Component {
  render() {
    const headStyle = {
      textAlign: 'center',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#eaeaea',
      margin: '0',
      fontSize: '16px',
      lineHeight: '1.5',
      color: 'brown'
    };
    return (
      <div className="Styling" style={{ border: '1px solid #ccc' }}>
        <h3 style={headStyle}>Component Styling</h3>
        <div className="Styling__content">
          <h4 className="Styling__contentHead">Content Heading</h4>
          <p>Content</p>
          <CssModule highlight={true} />
          <StylingScss />
        </div>
      </div>
    );
  }
}

export default Styling;
