import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Welcome/Header/Header';
import Article from './components/Welcome/Article/Article';

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
