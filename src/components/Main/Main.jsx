import React from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
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
