import React from 'react';
import Welcome from './components/_welcome/Welcome';
import Header from './components/_header/Header';
import Article from './components/_article/Article';
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
