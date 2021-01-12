import React from 'react';
import './Main.css';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

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
