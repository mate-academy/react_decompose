import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

import Welcom from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Header />
      <Welcom />
      <Article />
    </main>
  );
}

export default App;
