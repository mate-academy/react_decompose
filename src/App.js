import React from 'react';
import './App.css';
import Welcome from './components/welcom/Welcome';
import Article from './components/article/Article';
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
