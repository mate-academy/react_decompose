import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

import './App.css';

const App = () => {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
      <Navigation />
    </main>
  );
};

export default App;
