import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
      <Header />
      <Article />
    </main>
  );
}

export default App;
