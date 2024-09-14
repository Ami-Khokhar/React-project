import React from 'react';
import styles from './styles.module.css';
import Form from './form';

export default function compare() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <h1 className={styles.header2}>
       Enter The Details To compare Peak Energy consumption between two districts
      </h1>
      <div className={`${styles.tomato}`} style={{ width: '100vw', height: '100vh', color: '#5EBDD1' }}>
        <Form />
      </div>
    </div>
  );
};

