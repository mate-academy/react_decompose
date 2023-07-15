import React from 'react';
import WelcomeComp from './components/Welcome/Welcome';
import HeaderComp from './components/Header/Header';
import ArticleComp from './components/Article/Article';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <WelcomeComp />
    <HeaderComp />
    <ArticleComp />
  </main>
);

export default App;
