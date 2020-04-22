import React from 'react';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Article from './components/article/Article';
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
