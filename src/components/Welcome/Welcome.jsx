// import a css file containig welcome styles
import './Welcome.css';

export const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

// Add a default export statement for Welcome component to use it in the other files
export default Welcome;
