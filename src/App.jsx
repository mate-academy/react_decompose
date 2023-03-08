import React from 'react';
import './App.css';
import Article from './components/Article';
import Welcome from './components/Welcome';
import Header from './components/Header';

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
