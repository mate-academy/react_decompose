import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import Article from './Article';

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
