// import a css file containig welcome styles

// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
import './Welcome.css';

export const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="welcome__text">Sticky Header!</h1>
    </section>
  );
};

export default Welcome;
