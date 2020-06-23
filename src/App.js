import React from 'react';
import Header from './Header/Header';
import Article from './Article/Article';
import Section from './Section/Section';
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
