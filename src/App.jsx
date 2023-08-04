import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

import './App.css';

const App = () => (
  <div>
    <Welcome />
    <main className="app">
      <Header />
      <Article />
    </main>
  </div>
);

export default App;
