import React from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => (
  <nav className="navigation">
    <a className={styles.navigation__link} href="#about">About</a>
    <a className={styles.navigation__link} href="#services">Services</a>
    <a className={styles.navigation__link} href="#contact">Contact</a>
  </nav>
);
