// import a css file containig welcome styles
import './Welcome.css';
// Create a Welcome function returning the HTML of welcome block
const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

export default Welcome;
