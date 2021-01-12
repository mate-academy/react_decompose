import React from 'react';
import './Main.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Article from './components/Article';

function Main() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default Main;
