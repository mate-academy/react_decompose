import React from 'react';
import Welcom from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Welcom />
      <Header />
      <Article />
    </main>
  );
}

export default App;
