import React from 'react';
import Article from '../article/Article';
import Header from '../header/Header';
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
