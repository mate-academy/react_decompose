import React from 'react';
import './App.css';
import Article from './components/Article/Article.tsx';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">React JS</span>
      </section>
      <Header />
      <Article />
    </main>
  );
}

export default App;
