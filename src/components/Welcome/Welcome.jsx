// import a css file containig article styles
import './Welcome.css';
// Create an Article function returning the HTML of article block
const Welcome = () => {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
};
// Add a default export statement for Article component to use it in the other files

export default Welcome;
