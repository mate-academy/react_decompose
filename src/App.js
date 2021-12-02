import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Header from './components/Article/Article';
import Article from './components/Header/Header';

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
