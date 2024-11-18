import React from 'react';
import './App.css';

// import { Header } from './components/Header/Header';
// import { Article } from './components/Article/Article';
// import { Welcome } from './components/Welcome/Welcome';

import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

// Move each BEM block to a separate component (file) and import them here

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
