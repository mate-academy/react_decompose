import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Hero />
      <Header />
      <Article />
    </main>
  );
}

export default App;
