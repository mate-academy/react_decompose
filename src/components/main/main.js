import React from 'react';
import './main.css';

import Header from '../header/header';
import Welcome from '../welcome/welcome';
import Article from '../article/article';

function Main() {
  return (
    <main className="app">
      <Header />
      <Welcome />
      <Article />
    </main>
  );
}

export default Main;
