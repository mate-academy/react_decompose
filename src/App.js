import React from 'react';
import './App.css';
import Welkom from './components/Welkom/Welkom';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Welkom />
      <Header />
      <Article />
    </main>
  );
}

export default App;
