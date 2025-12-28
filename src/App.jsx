import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
<<<<<<< HEAD
import Welcome from './components/Welcome/Welcome';
=======
>>>>>>> d356218b4a91ad2a0637993763c3c8f9484d2101
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
<<<<<<< HEAD
      <Welcome />
=======
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
>>>>>>> d356218b4a91ad2a0637993763c3c8f9484d2101
      <Header />
      <Article />
    </main>
  );
}

export default App;
