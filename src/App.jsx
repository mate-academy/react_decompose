import React from 'react';

import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Header />
    <Welcome />
    <Article />
  </main>
);

export default App;
