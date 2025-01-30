// import a css file containing welcome styles
import './Welcome.scss';

// Create a Welcome function returning the HTML of welcome block
// Add a default export statement for Welcome component to use it in the other files
export default function Welcome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
}
