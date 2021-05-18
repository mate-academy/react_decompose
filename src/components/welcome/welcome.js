import React from 'react';
import './welcome.css';

import Header from '../header/header';
import Article from '../article/article';

function Welcome() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
      <Header />
      <Article />
    </main>
  );
}

export default Welcome;
