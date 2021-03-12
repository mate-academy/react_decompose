import React from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import './components/styles/main.css';

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
