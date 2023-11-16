import './Welcome.css';

const TestdWelcome = () => {
  const title = 'Sticky Header!';

  return (
    <section className="welcome">
      <span className="welcome__text">{title}</span>
    </section>
  );
};

export default TestdWelcome;
