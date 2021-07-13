import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

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
