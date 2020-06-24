import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavigationLink text="About" />
    <NavigationLink text="Services" />
    <NavigationLink text="Contact" />
  </nav>
);

const NavigationLink = props => (
  <a className={styles.navigation__link} href={`#${props.text.toLowerCase()}`}>
    {props.text}
  </a>
);

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Navigation;
