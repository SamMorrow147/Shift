import React from 'react';
import styles from './RotatingGear.module.css';

const RotatingGear = ({ 
  children, 
  size = 120, 
  speed = 8, 
  color = '#E8E8E8',
  centerColor = 'transparent',
  teeth = 36,
  className = ''
}) => {
  const gearStyle = {
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${speed}s`
  };

  const centerStyle = {
    top: `${size * 0.25}px`,
    left: `${size * 0.25}px`,
    width: `${size * 0.5}px`,
    height: `${size * 0.5}px`,
    backgroundColor: centerColor,
    animationDuration: `${speed}s`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const toothStyle = {
    top: `${-size * 0.125}px`,
    left: `${size * 0.425}px`,
    width: `${size * 0.15}px`,
    height: `${size + size * 0.25}px`,
    backgroundColor: color
  };

  const gearBodyStyle = {
    position: 'absolute',
    top: `${size * 0.015}px`,
    left: `${size * 0.015}px`,
    width: `${size * 0.97}px`,
    height: `${size * 0.97}px`,
    backgroundColor: color,
    borderRadius: '50%',
    zIndex: 2
  };

  // Create teeth array
  const teethArray = Array.from({ length: teeth }, (_, index) => {
    const rotation = (360 / teeth) * index;
    return (
      <div
        key={index}
        className={styles.tooth}
        style={{
          ...toothStyle,
          transform: `rotate(${rotation}deg)`
        }}
      />
    );
  });

  return (
    <div className={`${styles.parent} ${className}`}>
      <div className={styles.gear} style={gearStyle}>
        {teethArray}
        <div style={gearBodyStyle}></div>
        <div className={styles.center} style={centerStyle}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingGear; 