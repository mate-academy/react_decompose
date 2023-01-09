import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Article />
      <Header />
      <Welcome />
    </main>
  );
}

export default App;
