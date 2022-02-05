// Don't forget to import the React library
import React from 'react';
// Import a css file containig weclome styles
import './Welcome.css';
// Create a Welcome function returning the HTML of welcome block
function Welcome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
}
// Add a default export statement for Welcome component to use it in the
// other files

export default Welcome;
