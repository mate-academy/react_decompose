import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Article from './components/article/Article';

function App() {
  return (
    <main className="app">
      <Header />
      <Welcome />
      <Article />
    </main>
  );
}

export default App;
