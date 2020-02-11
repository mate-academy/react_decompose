import React from 'react';
import './components/App.css';
import Article from './components/article/Article';
import Section from './components/section/Section';
import Header from './components/header/Header';

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
