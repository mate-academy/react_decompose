import React from 'react';
import './App.css';
import Header from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Header/Header';

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
