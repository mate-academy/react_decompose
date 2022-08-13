// import the React library here
// import a css file containig article styles
import React from 'react';
import './Welcome.css';

const Welcome = () => (
  <main className="app">
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  </main>
);

// Create a Welcome function returning the HTML of welcome block
export default Welcome;
// Add a default export statement for Welcome component to use it in the other files
