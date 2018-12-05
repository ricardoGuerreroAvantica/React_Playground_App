import React from 'react';
import image from '../../Assets/burger-logo.png'
import styles from './Logo.css'
const logo = (props) => (
    <div className={styles.Logo} style={{heigth: props.heigth}}>
        <img src = {image} alt ="MyBurger"/>
    </div>
)

export default logo;