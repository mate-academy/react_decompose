import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import './App.css';

function App() {
  return (
    <main className="app">
      <Header />
      <Article />
      <Welcome />
    </main>
  );
}

export default App;
