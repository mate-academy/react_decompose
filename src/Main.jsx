import React from 'react';
import Header from './Header';
import Section from './Welcome';
import Article from './Article';

const Main = () => (
  <main className="app">
    <Section />
    <Header />
    <Article />
  </main>
);

export default Main;
