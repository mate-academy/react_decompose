import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import ArticleTitle from './components/Article_title';
import ArticleParagraph from './components/Article_paragraph';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <article className="article">
        <ArticleTitle />
        <ArticleParagraph />
      </article>
    </main>
  );
}

export default App;
