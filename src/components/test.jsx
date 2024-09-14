import React from 'react';
import styles from './styles.module.css';
import Form from './form1';

const Test = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <h1 className={styles.header1}>
        Enter the details to predict the peak consumption for your District
      </h1>
      <div className={`${styles.tomato}`} style={{ width: '100vw', height: '100vh', color: '#5CC4B1' }}>
        <Form />
      </div>
    </div>
  );
};

export default Test;

