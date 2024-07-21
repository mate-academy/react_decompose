import React from 'react';
import './App.css';
import HeaderBlock from './components/Header/Header';
import WelcomeBlock from './components/Welcome/Welcome';
import ArticleBlock from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <HeaderBlock />
    <WelcomeBlock />
    <ArticleBlock />
  </main>
);

export default App;
