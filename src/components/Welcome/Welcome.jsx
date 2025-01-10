// import a css file containig welcome styles
import React from 'react';

import './Welcome.css';

// Create a Welcome function returning the HTML of welcome block
function Welcome() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
    </main>
  );
}
// Add a default export statement for Welcome component to use it in the other files

export default Welcome;
