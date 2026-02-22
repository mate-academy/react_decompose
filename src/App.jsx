import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Navigation />
      <Header />
      <Article />
    </main>
  );
}

export default App;
