import React from 'react';

const Home = ({ history }) => {
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => {
        history.push('/routepage/about/javascript')
      }}>자바스크립트로 이동</button>
    </div>
  );
};

export default Home;
