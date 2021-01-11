import React from 'react';
import classes from './Welcome.module.css';

export const Welcome = () => (
  <section className={classes.welcome}>
    <span className={classes.welcome__text}>Sticky Header!</span>
  </section>
);
