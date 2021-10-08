import React from 'react';
import './App.css';
import Article from './components/blocks/Article';
import Welcome from './components/blocks/Welcome';
import Header from './components/blocks/Header';

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
