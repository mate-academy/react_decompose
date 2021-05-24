import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Article from './components/article/Article';
import { textArticle } from './data/data';

function App() {
  return (
    <main className="app">
      <Header />
      <Article textArticle={textArticle} />
    </main>
  );
}

export default App;
