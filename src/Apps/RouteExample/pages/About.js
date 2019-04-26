import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
  const { params: { name } } = match;
  const query = queryString.parse(location.search);
  const { color } = query;

  return (
    <div>
      <h2 style={{ color }}>About</h2>
      <p>match.params.name: {name}</p>
    </div>
  );
};

export default About;
