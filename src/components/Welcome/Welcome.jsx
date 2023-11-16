import './Welcome.css';

export const Welcome = () => {
  const title = 'Sticky Header!';

  return (
    <section className="welcome">
      <span className="welcome__text">{title}</span>
    </section>
  );
};
