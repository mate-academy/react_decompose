import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';

import './components/Article/Article.css';
import './components/Header/Header.css';
import './components/Welcome/Welcome.css';

function App() {
  return (
    <main className="app">
      <Article />
      <Header />
      <Welcome />
    </main>
  );
}

export default App;
