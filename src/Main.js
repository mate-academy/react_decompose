import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

function Main() {
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

export default Main;
