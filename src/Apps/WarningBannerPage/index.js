import React, { Component } from 'react';
import WarningBanner from './components/WarningBanner';

// 컴포넌트가 렌더링되지 못하도록 방지
class WarningBannerPage extends Component {
  state = {
    showWarning: true
  };

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  };

  render() {
    const { showWarning } = this.state;
    const { handleToggleClick } = this;

    return (
      <div style={{ border: '1px solid #ccc' }}>
        <button onClick={handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
        <WarningBanner warn={showWarning} />
      </div>
    );
  }
}

export default WarningBannerPage;
