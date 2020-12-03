import React from 'react';
import Header from './components/Header/Header';
import WelcomePage from './components/WelcomePage/WelcomePage';
import ArticleParagraph from './components/ArticleParagraph/ArticleParagraph';
import './App.css';

function App() {
  return (
    <main className="app">
      <WelcomePage />
      <Header />

      <article className="article">
        <h1 className="article__title">Headline</h1>
        <ArticleParagraph />
      </article>
    </main>
  );
}

export default App;
