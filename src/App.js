import React from 'react';
import './App.css';
import Section from './components/Section';
import Header from './components/Header';
import Article from './components/Article';

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
