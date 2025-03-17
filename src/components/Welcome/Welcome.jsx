// import a css file containig article styles
import React from 'react';
// Create an Article function returning the HTML of article block
const Welcome = () => {
  return (
    <welcome>
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
    </welcome>
  );
};

// Add a default export statement for Article component to use it in the other files

export default Welcome;
