import React from 'react';
import classNames from 'classnames/bind';

import styles from './CssModule.module.css';
console.log(styles);

const cx = classNames.bind(styles);

const CssModules = ({ highlight }) => {
  const condition = true;

  return (
    <div>
      <div>CssModules</div>
      <div className={styles.box}>box</div>
      <p className={styles.desc}>Hello React</p>
      <p className={styles.desc + ' ' + styles.emp}>Hello React</p>
      <p className={[styles.desc, styles.emp].join(' ')}>Hello React</p>

      {/* <p className={`${styles.desc} ${styles.emp}`}>Hello React</p> */}
      <p className={cx('desc', 'emp')}>Hello React</p>

      {/* <p
        className={`${styles.desc} ${styles.emp} ${
          highlight ? styles.highlight : ''
        }`}
      >
        Hello React
      </p> */}
      <p className={cx('desc', 'emp', { highlight })}>Hello React</p>
      {/* <p
        className={`${styles.desc} ${styles.emp} ${
          condition ? styles.highlight : ''
        }`}
      >
        Hello React
      </p> */}
      <p className={cx('desc', 'emp', { highlight: condition })}>Hello React</p>
    </div>
  );
};

export default CssModules;
