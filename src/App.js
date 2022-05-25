import React from 'react';
import './App.css';

import Article from './components/Article';
import Header from './components/Header';
import Welcome from './components/Welcome';

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
