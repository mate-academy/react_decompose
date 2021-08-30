import React from 'react';
import './App.css';
import Article from './components/Welcome/Article';
import Header from './components/Welcome/Header';
import Welcome from './components/Welcome/Welcome';

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
