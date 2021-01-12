import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
      <Article />
    </main>
  );
}

export default App;
