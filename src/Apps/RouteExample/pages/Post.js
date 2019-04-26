import React from 'react';

const Post = ({ match }) => {
  const { params: { id } } = match;

  return (
    <p>
      포스트 #{id}
    </p>
  );
};

export default Post;
