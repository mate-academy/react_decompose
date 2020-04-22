import React from 'react';
import './Main.css';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Section from '../Section/Section';

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
