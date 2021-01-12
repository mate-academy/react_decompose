import React from 'react';
import './main.css';
import Article from '../article/article';
import Header from '../header/header';
import Welcome from '../welcome/welcome';

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
