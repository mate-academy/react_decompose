import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <section>
      <Welcome />
    </section>
    <header>
      <Header />
    </header>
    <article>
      <Article />
    </article>
  </main>
);

export default App;
