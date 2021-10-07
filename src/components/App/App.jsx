import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Article from '../Article/Article';
import Welcome from '../Welcome/Welcome';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
