import React from 'react';
import RotatingGear from '../RotatingGear/index';
import styles from './GearDemo.module.css';

const GearDemo = () => {
  return (
    <div className={styles.demoContainer}>
      <h2 className={styles.title}>Rotating Gear Examples</h2>
      
      <div className={styles.examples}>
        {/* Example 1: Icon with gear */}
        <div className={styles.example}>
          <RotatingGear size={100} speed={6} color="#E8E8E8" teeth={8}>
            <div className={styles.icon}>🔧</div>
          </RotatingGear>
          <p>Tool Icon</p>
        </div>

        {/* Example 2: Text with gear */}
        <div className={styles.example}>
          <RotatingGear size={120} speed={10} color="#F0F0F0" teeth={10}>
            <div className={styles.text}>GEAR</div>
          </RotatingGear>
          <p>Text Element</p>
        </div>

        {/* Example 3: Logo placeholder with gear */}
        <div className={styles.example}>
          <RotatingGear size={80} speed={8} color="#ECECEC" teeth={6}>
            <div className={styles.logo}>LOGO</div>
          </RotatingGear>
          <p>Logo Element</p>
        </div>

        {/* Example 4: Button with gear */}
        <div className={styles.example}>
          <RotatingGear size={140} speed={12} color="#E5E5E5" teeth={12}>
            <button className={styles.button}>Click Me</button>
          </RotatingGear>
          <p>Interactive Button</p>
        </div>
      </div>
    </div>
  );
};

export default GearDemo; 