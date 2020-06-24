import React from 'react';
import styles from './Header.module.css';
import { Navigation } from '../navigation/Navigation';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>Site Name</h1>
    <Navigation />
  </header>
);
