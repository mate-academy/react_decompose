import React from 'react';
import './App.css';
import Section from './components/section/Section';
import Header from './components/header/Header';
import Article from './components/article/Article';

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
