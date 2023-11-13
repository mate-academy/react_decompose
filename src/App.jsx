import React from 'react';
import './App.css';
import WelcomeApp from './components/Welcome/Welcome';
import HeaderApp from './components/Header/Header';
import ArticleApp from './components/Article/Article';

const App = () => (
  <main className="app">
    <WelcomeApp />
    <HeaderApp />
    <ArticleApp />
  </main>
);

export default App;
