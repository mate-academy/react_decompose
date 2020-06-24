import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = ({ text }) => (
  <section className={styles.welcome}>
    <span className={styles.welcome__text}>{text}</span>
  </section>
);

Welcome.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Welcome;
