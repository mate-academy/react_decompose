import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Welcome />
      <section id="contact">
        {/* conteúdo da seção Contact aqui */}
        Contact content
      </section>
      <main className="app">
        <Article />
      </main>
    </>
  );
}

export default App;
