import React from 'react';
import Navigation from '../Navigation';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
      <Navigation />
    </section>
  );
}
