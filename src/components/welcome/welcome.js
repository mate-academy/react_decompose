import React from './node_modules/react';
import './Welcome.css';

function Welcome(welcome) {
  return (
    <section className="welcome">
      <span className="welcome__text">{welcome.title}</span>
    </section>
  )
}

export default Welcome;
