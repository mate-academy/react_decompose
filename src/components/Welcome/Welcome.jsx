import React from 'react';
import './Welcome.css';

// Move each BEM block to a separate component (file) and import them here
export const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);
