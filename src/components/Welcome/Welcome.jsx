// import a css file containig article styles

// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files

import React from 'react';
import './Welcome.css';
// Move each BEM block to a separate component (file) and import them here

const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

export default Welcome;
