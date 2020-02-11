import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Section from './components/Section/Section';
import Header from './components/Header/Header';

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
