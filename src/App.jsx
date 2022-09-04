import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <header className="header">
        <Header />
        <Navigation />
      </header>

      <main className="app">
        <section className="welcome">
          <Welcome />
        </section>

        <article className="article">
          <Article />
        </article>
      </main>
    </>
  );
}

export default App;
