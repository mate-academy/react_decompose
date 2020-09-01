import React from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Welcome from './components/Welcome';

function App() {
  return (
    <main className="app">
      <Header />
      <Welcome />
      <Article />
    </main>
  );
}

export default App;
