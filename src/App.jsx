import React from 'react';
import './App.css';
import HeaderBlock from './components/Header/Header';
import WelcomeBlock from './components/Welcome/Welcome';
import ArticleBlock from './components/Article/Article';
import NavigationBlock from './components/Navigation/Navigation';

const App = () => (
  <main className="app">
    <HeaderBlock />
    <WelcomeBlock />
    <ArticleBlock />
    <NavigationBlock />
  </main>
);

export default App;
