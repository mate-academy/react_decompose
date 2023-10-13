import React from 'react';
import './App.css';
import WelcomeComponent from './components/Welcome/Welcome';
import HeaderComponent from './components/Header/Header';
import ArticleComponent from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <WelcomeComponent />
    <HeaderComponent />
    <ArticleComponent />
  </main>
);

export default App;
