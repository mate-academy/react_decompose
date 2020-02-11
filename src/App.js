import React from 'react';
import './App.css';
import Header from './components/Header';
import Artical from './components/Article';

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
      <Header />
      <Artical />
    </main>
  );
}

export default App;
