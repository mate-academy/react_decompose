import React from 'react';
import './App.css';
import Article from './components/article/Article';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';

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
