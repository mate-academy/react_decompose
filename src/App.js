import React from 'react';
import './App.css';
import Header from './components/header';
import Artical from './components/artical';

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
