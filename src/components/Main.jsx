import React from 'react';
import Header from './Header';
import Article from './Article';
import Section from './Section';

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
