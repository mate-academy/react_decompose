import React from 'react';
import './App.css';
import Welcom from './components/welcom/welcom';
import Article from './components/article/article';
import Header from './components/header/header';

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
