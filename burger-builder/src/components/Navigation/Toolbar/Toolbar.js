import React from 'react';
import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar =(props)=> (

    <header className={styles.Toolbar}>
        <div>Menu</div>
        <Logo height="80%"/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;