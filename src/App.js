import React from 'react';
import './App.css';

import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
      <Navigation />
    </main>
  );
}

export default App;
