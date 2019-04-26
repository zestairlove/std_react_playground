import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = () => {
  return (
    <ul className={cx('menu')}>
      <li><NavLink activeClassName={cx('is-active')} exact to="/">Basic</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to="/components">Components</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to="/stylings">Stylings</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to="/counters">Counters</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to="/routepage">RoutePage</NavLink></li>
    </ul>
  );
};

export default Menu;