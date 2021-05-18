import React from 'react';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Article from '../Article/Article';

import './App.scss';

const App = function() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
};

export default App;
