import React from '../../../node_modules/react';
import Header from '../Header/header';
import Article from '../Article/article';
import './welcome.css';

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
