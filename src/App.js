import React from 'react';
import Welcom from './components/Welcome/welcome';
import Header from './components/Header/header';
import Article from './components/Article/article';

import './App.scss';

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
