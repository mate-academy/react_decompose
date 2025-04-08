import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Header />

      <Welcome />

      <Navigation />

      <Article />
    </main>
  );
}

export default App;
