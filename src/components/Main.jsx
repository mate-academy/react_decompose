import React from 'react';
import Welcome from './Welcome';
import Article from './Article';
import Header from './Header';
import '../App.css';

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
