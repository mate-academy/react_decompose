import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Artile';

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
