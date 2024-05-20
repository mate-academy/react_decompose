import React from 'react';
import './App.css';
import WelcomeRoot from './components/Welcome/Welcome';
import HeaderRoot from './components/Header/Header';
import ArticleRoot from './components/Article/Article'; // when I named the variable normally, the eslint did not skip the name

const App = () => (
  <main className="app">
    <WelcomeRoot />
    <HeaderRoot />
    <ArticleRoot />
  </main>
);

export default App;
