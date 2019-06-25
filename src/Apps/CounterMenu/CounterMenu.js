import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './CounterMenu.module.scss';

const cx = classNames.bind(styles);

const CounterMenu = ({ match }) => {
  return (
    <ul className={cx('menu')}>
      <li><NavLink activeClassName={cx('is-active')} exact to={`${match.url}`}>CounterApp</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxapp`}>CounterReduxApp</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxapp2`}>CounterReduxApp2</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxapp3`}>CounterReduxApp3</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxapp4`}>CounterReduxApp4</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxmiddleware`}>CounterReduxMiddleware</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxmiddlewaretry`}>CounterReduxMiddlewareTry</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxthunk`}>CounterReduxThunk</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxthunktry`}>CounterReduxThunkTry</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxpromisemiddleware`}>CounterReduxPromiseMiddleware</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxpromisemiddlewaretry`}>CounterReduxPromiseMiddlewareTry</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxpender`}>CounterReduxPender</NavLink></li>
      <li><NavLink activeClassName={cx('is-active')} to={`${match.url}/reduxpendertry`}>CounterReduxPenderTry</NavLink></li>
    </ul>
  );
};

export default withRouter(CounterMenu);
