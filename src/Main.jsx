import React from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import './App.css';

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
