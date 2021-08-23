import React from 'react';

import './Welcome.css';

const WelcomeText = () => (
  <span className="welcome__text">Sticky Header!</span>
);

const Welcome = () => (
  <section className="welcome">
    <WelcomeText />
  </section>
);

export default Welcome;
