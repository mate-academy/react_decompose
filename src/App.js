import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
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
