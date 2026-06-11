import React from 'react';
import './App.css';
import HeaderComp from './components/Header/Header';
import ArticleComp from './components/Article/Article';
import WelcomeComp from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <WelcomeComp />
      <HeaderComp />
      <ArticleComp />
    </main>
  );
}

export default App;
