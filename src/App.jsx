import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <section id="contact">
        <Contact />
      </section>
      <main className="app">
        <Article />
      </main>
    </>
  );
}

export default App;
