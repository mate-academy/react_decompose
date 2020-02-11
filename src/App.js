import React from 'react';
import Header from './components/js/Header';
import Navigation from './components/js/Navigation';
import Article from './components/js/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Header />
      <Navigation />
      <Article />
    </main>
  );
}

export default App;
