import React from 'react';
import Welcome from '../welcome/welcome';
import Header from '../header/header';
import Article from '../article/article';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default Main;
