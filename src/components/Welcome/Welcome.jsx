import './Welcome.css';

// Add a default export statement for Welcome component to use it in the other files
const Welcome = () => {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
};

export default Welcome;
