// import the React library here
import React from 'react';
// import a css file containig article styles
import './Welcome.css';

// Create a Welcome function returning the HTML of welcome block
const Welcome = () => (
  <>
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  </>
);

// Add a default export statement for Welcome component to use it in the other files
export default Welcome;
