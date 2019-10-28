import React from 'react';
import './Welcome.css';

function Welcome(props) {
  return (
    <section className="welcome">
      <span className="welcome__text">{props.text}</span>
    </section>
  );
}

export default Welcome;
