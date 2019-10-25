import React from 'react';
import './Welcome.css';

const Welcome = (props) => (
  <section className="welcome">
    <span className="welcome__text">{props.text}</span>
  </section>
);

export default Welcome;
