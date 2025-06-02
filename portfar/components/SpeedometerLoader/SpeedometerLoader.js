import React from 'react';
import styles from './SpeedometerLoader.module.css';

const SpeedometerLoader = () => {
  return (
    <div id="loader-wrapper">
      <div className={styles.loader}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.subline}></div>
        <div className={styles.subline}></div>
        <div className={styles.subline}></div>
        <div className={styles.subline}></div>
        <div className={styles.subline}></div>
        <div className={styles.loaderCircle1}>
          <div className={styles.loaderCircle2}></div>
        </div>
        <div className={styles.needle}></div>
        <div className={styles.loading}>Loading</div>
      </div>
    </div>
  );
};

export default SpeedometerLoader; 