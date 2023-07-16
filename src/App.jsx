import React from 'react';
import WelcomeComp from './components/Welcome/Welcome';
import HeaderComp from './components/Header/Header';
import ArticleComp from './components/Article/Article';
import './App.css';

const App = () => (
  <main className="app">
    <WelcomeComp />
    <HeaderComp />
    <ArticleComp />
  </main>
);

export default App;
