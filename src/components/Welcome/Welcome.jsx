// import a css file containig welcome styles

// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
// Welcome.jsx
import './Welcome.css';

function Welcome() {
  return (
    <section className="welcome">
      <p className="welcome__text">Sticky Header!</p>
    </section>
  );
}

export default Welcome;
