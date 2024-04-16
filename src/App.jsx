import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Navigation />
    <Article />
  </main>
);

export default App;
