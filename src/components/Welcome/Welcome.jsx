import React from 'react';
import './Welcome.css';
// Import a css file containig weclome styles

const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

// Create a Welcome function returning the HTML of welcome block

export default Welcome;
// Add a default export statement for
// Welcome component to use it in the other files
