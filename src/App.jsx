import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import './App.css';
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
