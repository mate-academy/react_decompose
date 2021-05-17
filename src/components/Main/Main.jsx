import React from 'react';
import SectionWelcome from '../SectionWelcome/SectionWelcome';
import Header from '../Header/Header';
import Article from '../Article/Article';

function Main() {
  return (
    <main className="app">
      <SectionWelcome />
      <Header />
      <Article />
    </main>
  );
}

export default Main;
