import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation';
import styles from './Header.module.css';

const Header = ({ siteName }) => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>{siteName}</h1>
    <Navigation />
  </header>
);

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Header;
