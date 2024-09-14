import React from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";
export default function output2(){
    return(
        <div className={`${styles.tomato}`} style={{ width: '100vw', height: '100vh', color: '#5CC4B1' }}>
        <Link to='/alldistricts'>  <button className={styles.nextButtonContainer} style={{width:'10%'}}>See for all districts</button></Link>
      </div>
    )
}