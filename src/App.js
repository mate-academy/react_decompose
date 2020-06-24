import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Section from './components/Section/Section';
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
