import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <Header />
    <Welcome />
    <Article />
  </main>
);

export default App;
