// Import the CSS file containing welcome styles
import './Welcome.css';

// Create a Welcome function returning the HTML of the welcome block
function Welcome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
}

// Add a default export statement for the Welcome component to use it in other files
export default Welcome;
