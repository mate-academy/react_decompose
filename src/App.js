import React from 'react';
import './App.css';

import { Welcome } from './components/Welcome';
// import Article from './components/Article';
import { Article } from './components/Article';
import { Header } from './components/Header';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
