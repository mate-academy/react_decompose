import React from 'react';
import './App.css';
import Article from './article/Article';
import Header from './header/Header';
import Welcome from './section-welcome/Welcome';

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
