import React from 'react';
import './App.css';
import Article from './components/elements/Article';
import Welcome from './components/elements/Welcome';
import Header from './components/elements/Header';

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
