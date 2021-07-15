import React from 'react';
import Section from './Section';
import Header from './Header';
import Article from './Article';

import './Main.css';

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
