import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
    </main>
  );
}

export default App;
