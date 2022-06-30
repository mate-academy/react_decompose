import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Header />
      <Article />
    </main>
  );
}

export default App;
