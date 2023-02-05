import React from 'react';

import './Welcome.css';
// import a css file containig article styles
function Welcome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
}

// Create a Welcome function returning the HTML of welcome block
export default Welcome;
// Add a default export statement for Welcome component to use it in the other files
