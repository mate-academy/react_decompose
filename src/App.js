import React from 'react';
import Article from './components/Article';
import Header from './components/Header';
import Welcome from './components/Welcome';
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
