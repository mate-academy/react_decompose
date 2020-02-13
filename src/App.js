import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import './App.css';
import Section from './components/Section/Section';

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
