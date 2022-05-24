import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';

import './components/Article/Article.scss';
import './components/Header/Header.scss';
import './components/Welcome/Welcome.scss';
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
