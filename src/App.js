import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import Article from './Article';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
