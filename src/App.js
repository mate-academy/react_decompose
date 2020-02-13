import React from 'react';
import './App.css';

import Welcome from './components/js/Welcome';
import Header from './components/js/Header';
import Article from './components/js/Article';

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
