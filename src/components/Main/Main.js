import React from 'react';
import Article from '../Article/Article';
import Section from '../Section/Section';
import Header from '../Header/Header';

function Main() {
  return (
    <main className="app">
      <Section />
      <Header />
      <Article />
    </main>
  );
}

export default Main;
