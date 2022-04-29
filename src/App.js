import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Article from './components/article/Aticle';
import Header from './components/header/Header';

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
