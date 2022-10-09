import React from 'react';
import './App.css';

import './components/Article'
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <nav className="navigation">
          <a className="navigation__link" href="#about">About</a>
          <a className="navigation__link" href="#services">Services</a>
          <a className="navigation__link" href="#contact">Contact</a>
        </nav>
      </header>
      <Article />
    </main>
  );
}

export default App;
