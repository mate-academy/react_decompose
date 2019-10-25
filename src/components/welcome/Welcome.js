import React from 'react';
import './welcome.css';

const Welcome = (props) => {

  return (
    <section className="welcome">
      <span className="welcome__text">{props.title}</span>
    </section>
  )
}

export default Welcome;
