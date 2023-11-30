import React from 'react';
import './App.scss';
import WelcomeText from './components/Welcome/Welcome';
import HeaderApp from './components/Header/Header';
import ArticleMain from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <WelcomeText />
    <HeaderApp />
    <ArticleMain />
  </main>
);

export default App;
