import React from 'react';
import './App.css';
import Welcome from './welcome/Welcome';
import Header from './header/Header';
import Article from './article/Article';

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
