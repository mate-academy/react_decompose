import React from 'react';

export const Welcome = () => {
  const slogan = 'Sticky Header!';

  return (
    <section className="welcome">
      <span className="welcome__text">{slogan}</span>
    </section>
  );
};
