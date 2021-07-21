import React from 'react';
import Header from '../header/Header';
import Article from '../article/Article';
import Welcome from '../welcome/Welcome';

import './App.css';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />

    </main>
  );
}

export default App;
