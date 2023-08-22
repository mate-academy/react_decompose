import React from 'react';
import './App.css';

import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

export const App = () => (
  <main className="app">
    <Welcome />

    <Header />

    <Article />
  </main>
);

export default App;
