import React from 'react';
import style from './Welcome.module.css';

function Welcome() {
  return (
    <section className={style.welcome}>
      <span className={style.welcome__text}>Sticky Header!</span>
    </section>
  );
}

export default Welcome;
