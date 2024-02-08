import React from 'react';

import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';

import './App.css';

const App = () => (
  <main className="app">
    <Article />
    <Header />
    <Navigation />
    <Welcome />
  </main>
);

export default App;
