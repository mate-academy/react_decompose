import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <section className="welcome">
      <Welcome />
    </section>
    <header className="header">
      <Header />
    </header>
    <article className="article">
      <Article />
    </article>
  </main>
);

export default App;
