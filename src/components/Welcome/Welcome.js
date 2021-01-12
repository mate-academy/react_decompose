import React from 'react';
import styles from './welcome.module.css';

function Welcome() {
  return (
    <section className={styles.welcome}>
      <span className={styles.welcome__text}>Sticky Header!</span>
    </section>
  );
}

export default Welcome;
