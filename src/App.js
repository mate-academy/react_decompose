import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Article from './components/Article/article';
import Welcome from './components/Section/Welcome';

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
