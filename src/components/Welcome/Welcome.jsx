// import a css file containig article styles
import './Welcome.css';

// Create a Header function returning the HTML of header block
const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);
// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
export default Welcome;
