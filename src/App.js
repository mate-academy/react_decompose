import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Article from './components/article/Article';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Nav />
      <Article />
    </main>
  );
}

export default App;
