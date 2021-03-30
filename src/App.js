import React from 'react';
import Header from './components/header/Header';
import Welcom from './components/welcome/Welcome';
import Article from './components/article/Article';

import './App.scss';

const App = () => (
  <main className="app">
    <Welcom />
    <Header />
    <Article />
  </main>
);

export default App;
