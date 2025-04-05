// import a css file containig welcome styles
import './Welcome.css';

// Create a Welcome function returning the HTML of welcome block
function Welcome() {
  return <span className="welcome__text">Sticky Header!</span>;
}

// Add a default export statement for Welcome component to use it in the other files
export default Welcome;
