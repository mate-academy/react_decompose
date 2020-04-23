import React from 'react';
import styles from './navigation.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>Site Name</h1>
    <nav className={styles.navigation}>
      <a className={styles.navigation__link} href="#about">About</a>
      <a className={styles.navigation__link} href="#services">Services</a>
      <a className={styles.navigation__link} href="#contact">Contact</a>
    </nav>
  </header>
);

export default Navigation;
