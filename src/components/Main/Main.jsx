import React from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';

import './Main.css';

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
