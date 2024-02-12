import React from 'react';
import './App.css';

import { WelcomeBlock } from './components/Welcome/Welcome';
import { HeaderBlock } from './components/Header/Header';
import { ArticleBlock } from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => {
  <main className="app">
    <WelcomeBlock />
    <HeaderBlock />
    <ArticleBlock />
  </main>;
};

export default App;
