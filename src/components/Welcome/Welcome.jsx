// import a css file containing welcome styles
import React from 'react';
import './Welcome.css';

// Create a Welcome function returning the HTML of the welcome block
export const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

// Add a default export statement for the Welcome component to use it in other files
export default Welcome;
