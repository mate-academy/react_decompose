import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Article from './components/article/Article';

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
