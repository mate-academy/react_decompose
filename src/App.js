import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Welcome from './components/Welcome/welcome';
import Article from './components/Article/article';

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
