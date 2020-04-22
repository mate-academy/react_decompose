import React from 'react';
import './Main.css';
import Section from '../Section/Section';
import Header from '../Header/Header';
import Article from '../Article/Article';

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
