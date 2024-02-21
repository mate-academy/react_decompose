import React from 'react';
import './App.css';
import HeaderForPage from './components/Header/Header';
import WelcomeForPage from './components/Welcome/Welcome';
import ArticleForPage from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <WelcomeForPage />

    <HeaderForPage />

    <ArticleForPage />
  </main>
);

export default App;
