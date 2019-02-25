import React from 'react';

const WarningBanner = ({ warn }) => {
  // null을 반환하여 컴포넌트가 렌더링 되지 않게 한다.
  if (!warn) return null;

  return <div style={{ color: 'red' }}>Warning!</div>;
};

export default WarningBanner;
