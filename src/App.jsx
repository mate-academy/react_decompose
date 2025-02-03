import React from 'react';
import './App.css';
import WelcomeForPage from './components/Welcome/Welcome';
import HeaderForPage from './components/Header/Header';
import ArticleForPage from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <WelcomeForPage />
      <HeaderForPage />
      <ArticleForPage />
    </main>
  );
}

export default App;
