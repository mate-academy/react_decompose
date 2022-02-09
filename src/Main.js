import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import Article from './Article';

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
