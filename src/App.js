import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';
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
