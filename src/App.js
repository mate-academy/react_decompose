import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Navigation from './components/Navigattion/Navigation';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
      <Navigation />
    </main>
  );
}

export default App;
