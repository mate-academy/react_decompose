import React from 'react';
import './App.css';
import Section from './components/Section';
import './components/blocks/Section.scss';
import Header from './components/Header';
import './components/blocks/Header.scss';
import Article from './components/Article';
import './components/blocks/Article.scss';

function App() {
  return (
    <main className="app">
      <Section />
      <Header />
      <Article />
    </main>
  );
}

export default App;
