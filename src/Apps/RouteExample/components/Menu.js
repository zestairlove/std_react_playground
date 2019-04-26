import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green'
  };

  return (
    <ul>
      <li>
        <NavLink exact to="/routepage" activeStyle={activeStyle}>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/routepage/about" activeStyle={activeStyle}>About</NavLink>
      </li>
      <li>
        <NavLink to="/routepage/about/react" activeStyle={activeStyle}>React Intro</NavLink>
      </li>
      <li>
        <NavLink to="/routepage/posts" activeStyle={activeStyle}>Posts</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
