import React from 'react';
import './App.css';
import Welcome from './components/Welcome/welcome';
import Header from './components/Header/header';
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
