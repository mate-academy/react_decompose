import React from 'react';
import ArticleComponent from './components/Article/Article';
import HeaderComponent from './components/Header/Header';
import WelcomeComponent from './components/Welcome/Welcome';
import './App.css';

const App = () => (
  <main className="app">
    <WelcomeComponent />
    <HeaderComponent />
    <ArticleComponent />
  </main>
);

export default App;
