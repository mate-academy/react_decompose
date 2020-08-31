import React from 'react';
import Header from './header';
import Article from './article';

const Main = () => (
  <main className="app">
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
    <Header />
    <Article />
  </main>
);

export default Main;
