import React from 'react';
import Section from './components/section/Section';
import Header from './components/header/Header';
import Article from './components/article/Article';
import './App.css';

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
