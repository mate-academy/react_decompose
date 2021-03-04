import React from 'react';
import Welcome from '../welcome/Welcome';
import Header from '../header/Header';
import Article from '../article/Article';

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
