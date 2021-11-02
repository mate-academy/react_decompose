import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Welcome/Header/Header';
import Article from './components/Welcome/Article/Article';
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
