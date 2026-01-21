import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Header />
      <Navigation />
      <Welcome />
      <Article />
    </main>
  );
}

export default App;
