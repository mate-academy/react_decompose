import React from 'react';
import './App.css';

import { WelcomeBlock } from './components/Welcome/Welcome';
import { HeaderBlock } from './components/Header/Header';
import { NavigationBlock } from './components/Navigation/Navigation';
import { ArticleBlock } from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => {
  <main className="app">
    <WelcomeBlock />
    <HeaderBlock />
    <NavigationBlock />
    <ArticleBlock />
  </main>;
};

export default App;
