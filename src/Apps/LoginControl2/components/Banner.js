import React from 'react';

const Banner = ({ isShow }) => {
  if (!isShow) return null;

  return <div style={{ color: 'red' }}>Banner</div>;
};

export default Banner;
