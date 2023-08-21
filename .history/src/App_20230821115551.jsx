import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
    < Header />
    
  </main>
);

export default App;
