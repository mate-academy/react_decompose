import React from 'react';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Intro />
      <Header />
      <Article />
    </main>
  );
}

export default App;
