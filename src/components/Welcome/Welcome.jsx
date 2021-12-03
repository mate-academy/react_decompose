// Don't forget to import the React library
// Import a css file containig weclome styles

// Create a Welcome function returning the HTML of welcome block

import React from 'react';
import './Welcome.css';

const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

export default Welcome;
