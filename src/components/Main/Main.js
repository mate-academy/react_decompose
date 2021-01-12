import React from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Article from '../Article/Article';

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
