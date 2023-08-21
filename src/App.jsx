import React from 'react';
import './App.scss';

import HeaderApp from './components/Header/Header';
import ArticleApp from './components/Article/Article';
import WelcomeApp from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <HeaderApp />
    <WelcomeApp />
    <ArticleApp />
  </main>
);

export default App;
