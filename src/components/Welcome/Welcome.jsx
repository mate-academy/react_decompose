import React from 'react';
import './Welcome.css';

const welcomeText = `Sticky Header!`;

const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">
      {welcomeText}
    </span>
  </section>
);

export default Welcome;
