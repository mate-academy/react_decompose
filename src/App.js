import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Header />
      <Nav />
      <Article />
    </main>
  );
}

export default App;
