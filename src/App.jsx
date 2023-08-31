import React from 'react';
import './App.css';

// Move each BEM block to a separate component (file) and import them here

import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <Header />
    <Article />
    <Welcome />
  </main>
);

export default App;
