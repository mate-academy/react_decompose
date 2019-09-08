import React from 'react';
import './welcome.css';

function Welcome(welcome) {
  return (
    <section className="welcome">
      <span className="welcome__text">{welcome.title}</span>
    </section>
  )
}

export default Welcome;
