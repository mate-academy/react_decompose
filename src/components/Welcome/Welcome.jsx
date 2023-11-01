import React from 'react';
// import a css file containig article styles
import './Welcome.css';
// Create a Header function returning the HTML of header block
const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);
// Add a default export statement for Header component to use it in the other files

export default Welcome;
