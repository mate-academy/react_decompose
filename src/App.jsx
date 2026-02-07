import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Navigation />
      <Article />
    </main>
  );
}

export default App;
