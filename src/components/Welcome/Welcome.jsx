// import a css file containig article styles
import React from 'react';
import './Welcome.css';
// Create a Welcome function returning the HTML of welcome block
function Welocome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
}

// Add a default export statement for Welcome component to use it in the other files
export default Welocome;
