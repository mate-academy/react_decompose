import React from 'react';
import SectionWelcome from './sectionWelcome/sectionWelcome';
import Header from './Header/header';
import Article from './Article/article';

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
