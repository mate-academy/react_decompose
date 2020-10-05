import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/welcome';
import Article from './components/Article/article';
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
