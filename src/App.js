import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Article from './components/Article/Article';

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
