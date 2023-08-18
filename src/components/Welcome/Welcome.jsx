// import a css file containig article styles
import './Welcome.css';
// Create a Header function returning the HTML of header block
export const Welcome = () => (
  // Create a Welcome function returning the HTML of welcome block
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
  // Add a default export statement for Welcome component to use it in the other files
);

export default Welcome;
